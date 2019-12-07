<template>
   <div class="ratings" ref="ratings">
   	<div class="ratings-content">
      <div class="ratingselect">
      	<div class="rating-type border-1px">
      		<span class="block positive" :class="{active:selectType === 2}" @click ="setSelectType(2)"> 
      			全部
      			<span class="count">{{ratings.length}}</span>
      		</span>
      		<span class="block positive" @click="setSelectType(0)" :class="{active:selectType === 0}"> 
      			 满意
      			<span class="count">{{positiveSize}}</span>
      		</span> 
      		<span class="block negative" @click="setSelectType(1)" :class="{active:selectType === 1}"> 
      			不满意
      			<span class="count">{{ratings.length-positiveSize}}</span>
      		</span> 
      	</div> 
      	<div class="switch" :class="{on:onlyShowText}" @click="gottleOnlyTextShow"> 
      		<span class="iconfont icon-gouxuanzhong"></span> 
      		<span class="text">只看有内容的评价</span> 
      	</div> 
      </div> 
      <div class="rating-wrapper"> 
      	<ul>
          <li class="rating-item" v-for="(rating, index) in filterRatings" :key="index"> 
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar">
            </div> 
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <Star :score="rating.score" :size="24" />
                <span class="delivery">{{rating.deliveryTime}}</span>
              </div>
                <p class="text">{{rating.text}}</p>
              <div class="recommend">
                <span class="iconfont" :class="rating.rateType === 0 ? 'icon-thumb_up':'icon-thumb_down'"></span><!--评论图标显示-->
                <span class="item" v-for="(item, index) in rating.recommend" :key="index">{{item}}</span>
              </div>
              <div class="time">{{rating.rateTime}}</div>
            </div>
      	</li>
      </ul> 
    </div> 
   </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Star from '../star/star'
import {mapState,mapGetters} from 'vuex'
export default {
  mounted() {
    this.$store.dispatch('getRatings',{click:true})
  },
  computed: {
    ...mapState(['ratings']),
    ...mapGetters(['positiveSize']),
    filterRatings(){
      //拿出相关数据
      const {ratings,selectType,onlyShowText} = this
      //产生一个过滤新数组
      return ratings.filter(rating=>{
        const {rateType,text} = rating
         /*
            条件1:
                selectType: 0/1/2
                rateType: 0/1
                selectType===2 || selectType===rateType
            条件2
                onlyShowText: true/false
                text: 有值/没值
                !onlyShowText || text.length>0
           */
          return (selectType === 2 || selectType === rateType) && (!onlyShowText || text.length>0)
      })
    }
  },
  data() { 
    return {
      selectType:2,
      onlyShowText:false
    }
  },
  components:{
    Star
  },
  methods: {
    setSelectType(selectType){
      this.selectType = selectType;
    },
  gottleOnlyTextShow(){
    this.onlyShowText = !this.onlyShowText
  }
  }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .ratings
    .ratings-content
      width 100%
      .overview
        display flex
        width 100%
        padding 18px 0
        .overview-left
          flex 1
          text-align center
          .score
            height 28px
            line-height 28px
            font-size 24px
            color #FF9900
            margin-bottom 6px
          .title
            font-size 12px
            line-height 12px
            margin-bottom 8px
          .rank
            font-size 10px
            line-height 10px
            color #93999F
        .overview-right
          flex 2
          border-left 2px solid #93999F
          .score-wrapper
            padding 0 0 8px 20px
            font-size 12px
            .title
              line-height 18px
              padding-left 10px
            .score
              color #FF9900
          .delivery-wrapper
            padding-left 10px
            font-size 12px
            .delivery
               color #93999F
      .split
        width 100%
        height 16px
        background #f3f5f7
        top-border-1px(rgba(7, 17, 27, 0.1))
        bottom-border-1px(rgba(7, 17, 27, 0.1))      
      .ratingselect
        padding 18px 0 0 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))     
        .rating-type 
          display flex
          padding 18px 0
          .block
            width 68px
            height 32px
            background green
            margin-left 8px
            line-height 32px
            text-align center
            border-radius 5px
            background rgba(77,85,93,0.2)
            color #4d555d
            font-size 12px
            &.active
              color #ffffff
              background red
        .switch
          padding: 12px 18px
          line-height: 24px
          border-bottom: 1px solid rgba(7, 17, 27, 0.1)
          color: rgb(147, 153, 159)
          font-size: 0
          &.on
            .icon-gouxuanzhong
              color: red
        .icon-gouxuanzhong
          display: inline-block
          vertical-align: top
          margin-right: 4px
          font-size: 24px
        .text
          display: inline-block
          vertical-align: top
          font-size: 12px
      .rating-wrapper
        padding 18px
        .rating-item
          display flex
          padding 18px 0px
          bottom-border-1px(rgba(7, 17, 27, 0.1))   
          .avatar
            width 28px
            height 28px
            margin-right 12px
            img 
              border-radius 50%
          .content
            .name
              color #07111b
              font-size 10px
              margin 4px
              line-height 12px
            .star-wrapper
              .delivery
                font-size 10px
                color #93999f
                display inline-block
                line-height 12px
                vertical-align top
                margin-left 5px
            .text
                font-size 10px
                margin-bottom 8px
            .recommend
              line-height 16px
              .iconfont
                font-style normal
                color #f5a100
                font-size 9px
              .item
                border 1px solid rgba(7,17,27,0.1)
                border-radius 5px
                background #fff
                color #93999f
                display inline-block
                margin 0 8px 4px 0
                font-size 9px
            .time
              position absolute
              right 0
              top 20px
              font-size 12px
              color #93999f

</style>