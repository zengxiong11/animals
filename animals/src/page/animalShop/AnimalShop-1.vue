<template>
  <div id="">
      <header-top :title="msg" />
      <div class="shop_swiper">
        <mt-swipe :auto="4000">
          <mt-swipe-item><img style="width:100%" src="//img13.360buyimg.com/cms/jfs/t2623/102/3988746514/38968/c7ada1a4/57a43024N2bea2ff7.jpg" /></mt-swipe-item>
          <mt-swipe-item><img style="width:100%" src="//img12.360buyimg.com/cms/jfs/t3064/283/1249778872/26536/ffe95dcb/57c8eb7aN991657f1.jpg" /></mt-swipe-item>
          <mt-swipe-item><img style="width:100%" src="//img13.360buyimg.com/cms/jfs/t2659/42/3991104728/33211/94bc4f3f/57a43efbNb7c5849a.jpg" /></mt-swipe-item>
          <mt-swipe-item><img style="width:100%" src="//img14.360buyimg.com/cms/jfs/t23326/213/2646534647/606316/12a672ff/5b88b555Naba0cfec.jpg" /></mt-swipe-item>
           <mt-swipe-item><img style="width:100%" src="//img13.360buyimg.com/cms/jfs/t4126/97/3253304501/56657/30a7877e/58ddefc3N8c290bf0.jpg" /></mt-swipe-item>
        </mt-swipe>
      </div>
     	<div class="goods"> 
			<div class="menu-wrapper"> 
				<ul>
					<!--current-->
					<li class="menu-item" v-for="(good, index) in goods" :key="index" 
         :class="{current: index === currentIndex}" @click="clickMenuItem(index)"> 
					<span class="text bottom-border-1px"> 
						<img class="icon" :src="good.icon" v-if="good.icon"><!--有时候不会有图片，用v-if判断--> 
						{{good.name}}
					</span>
					</li> 
				</ul> 
		</div> 
		<div class="foods-wrapper"> 
			<ul ref="scrollSul">
				<li class="food-list-hook" v-for="(good, index) in goods" :key="index" @click="showFood(food)" > 
					<h1 class="title">{{good.name}}</h1> 
					<ul>
						<li class="food-item bottom-border-1px" v-for="(food, index) in good.foods" :key="index">
							<div class="icon"> 
								<img width="57" height="57" :src="food.icon"> 
							</div> 
							<div class="content"> 
								<h2 class="name">{{food.name}}</h2> 
								<p class="desc">{{food.description}}</p> 
								<div class="extra"> 
									<span class="count">月售 {{food.sellCount}} 份</span> 
									<span>好评率 {{food.rating}}%</span>
								</div> 
								<div class="price"> 
									<span class="now">￥{{food.price}}</span> 
								</div> 
								<div class="cartcontrol-wrapper">
                 	
								</div>  
							</div> 
						</li> 
					</ul> 
				</li> 
			</ul> 
		</div>
	</div>
  </div>
</template>

<script>
import headerTop from '../../components/HeaderTop/HeaderTop.vue'
import { Swipe, SwipeItem } from 'mint-ui';
import {mapActions,mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  data() { 
    return {
      msg:'宠物商店',
      scrollY:0,
      tops:[]
    }
  },
  computed: {
      ...mapState(['goods']),

      // 计算得到当前分类的下标
      currentIndex() {// 初始和相关数据发生了变化
        // 得到条件数据
        const {scrollY, tops} = this
        // 根据条件计算产生一个结果
        const index = tops.findIndex((top, index) => {
          // scrollY>=当前top && scrollY<下一个top
        scrollY >= top && scrollY < top[index + 1]
           // 返回结果
           return
        })
      }
    },
   /* currentIndex(){
      //得到条件数据
      const {scrollY,tops} = this
      //根据条件计算产生一个置
      const index = tops.findIndex((top,index)=>{
        return scrollY>=top && scrollY<top[index+1]
      })
      //返回结果
      return index
    }*/
  mounted() {
    this.$store.dispatch('getGoods',()=>{//回调函数
      this.$nextTick(()=>{//数据更新后执行
        this._initScroll()
        this._initTops()
      })
    },)
  },
  components:{
    headerTop,
    'mt-swipe': Swipe,
    'mt-swipe-item': SwipeItem
  },
  methods: {
    //滑动初始化函数
    _initScroll(){
       //列表显示之后创建
       new BScroll('.menu-wrapper',{
         click:true
        })
        this.foodsScroll = new BScroll('.foods-wrapper',{
        //可增加配置对象，改变相应的操作
          probeType:2,
          click:true
        })
        //给右侧列表绑定scroll监听
        this.foodsScroll.on('scroll', ({x, y}) => {
          this.scrollY = Math.abs(y)
        })
         // 给右侧列表绑定scroll结束的监听
        this.foodsScroll.on('scrollEnd', ({x, y}) => {
          console.log('scrollEnd', x, y)
          this.scrollY = Math.abs(y)
        })
    },
   //初始化tops函数
    _initTops(){
      //1.初始化tops
      const tops = []
      let top = 0
      tops.push(top)
      //2.收集
      //找到所有分类的li有两种方式
      //const lis = this.$refs.scrollSul.Children
      const lis = this.$refs.scrollSul.getElementsByClassName('food-list-hook')
      //更新数据
      //将伪数组变成一个真数组，并将li的告诉放到数组中
      Array.prototype.slice.call(lis).forEach(li =>{
        top += li.clientHeight
        tops.push(top)
      })
      this.tops = tops
      console.log(tops)
    },
    //点击列表切换，需传一个参数作为标识
    clickMenuItem(index){
      //使用滑动列表滑动右边
      //得到目标位置的scrollY
      const scrollY = this.tops[index]

      //立即更新scrollY(让点击的分类成为当前分类)
      this.scrollY = scrollY
      //平滑滚动右侧列表
      this.foodsScroll.scrollTo(0,-scrollY,300)
    },
  }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixins.styl"
  .shop_swiper
    margin-top 45px
    width 100%
    height 200px
    background #ffffff
      .mint-swipe
        width 100%
        height 200px
          .mint-swipe-items-wrap
            img 
              width 100%
  .goods
    display: flex
    position: absolute
    top: 245px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>