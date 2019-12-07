<template>
  <div class="order">
     <header-top title="确认支付">
      <router-link class="back" slot="left" to="/shop/goods">
        <i class="iconfont icon-arrow_left"></i>
      </router-link>
     </header-top>
     <div class="order_head">
          <van-contact-card :type="address_type"
                add-text="选择收货地址"
                :name="address_name"
                :tel="address_phone"
                @click="chooseAddress" />
      <ul>
        <li class="food-item" v-for="(food, index) in cartFoods" :key="index">
          <div class="icon">
             <img width=56px height=56px :src="food.icon">
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
            <div class="cartcontrol"> 
              <cart-control :food="food" />
            </div>
          </div>
        </div>
      </li>
    </ul>
     </div>
     <div class="order_content">
     </div>
      
     <div class="order_foot">
        <div class="shopcart">
            <div class="content">
                <div class="content-left">
                    <div class="price">￥{{totalPrice}}</div>
                </div> 
                <div class="content-right">
                    <div class="pay enough"> 确认支付 </div>
            </div>
        </div>
    </div>
     </div>
  </div>
</template>

<script>
import headerTop from '../../components/HeaderTop/HeaderTop';
import cartControl from '../../components/cartControl/cartControl.vue'
import {mapState,mapGetters} from 'vuex';
export default {
  computed: {
    ...mapState(['cartFoods']),
    ...mapGetters(['totalCount','totalPrice']),
  },
  components: {
    headerTop,
    cartControl
  },
  data() { 
    return {
         address_type: 'add',           //地址卡片类型
        address_name: null,            // 收货人
        address_phone: null,           // 收货人电话
        address_id: null,              // 收货人地址ID
    }
  },
  methods: {
       // 选择地址
        chooseAddress () {
        this.$router.push('/order/myAddress');
    },
  },
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.order
  height  100%
  .back
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-arrow_left
        font-size 20px
        color #ffffff
        z-index 200
        display block
  .order_head
    width 80%
    height 100%
    position absolute
    top 45px
    left 0
    right 0
    margin 0 auto
    padding 20px 20px
    background #fff
    border-radius 10px
      .way
        width 100%
        height 30px 
        line-height 30px
        padding 20px
        position relative
        font-size 12px
        bottom-border-1px(#f1f1f1)
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
  .order_foot
    width 100%
    height 48px
    position fixed
    left 0
    right 0
    bottom 0
    background red
    .shopcart
      width 100%
      .content
        width 100%
        display flex
        .content-left
          flex 2
          background #ff4200
          .price
            display inline-block
            font-size 16px
            color #ffffff
            line-height 44px
            box-sizing border-box
            margin 0 20px
          .desc
            color #808080
            display inline-block
            vertical-align bottom
            margin-bottom 15px
            margin-left -45px
            font-size 12px
        .content-right
          flex 1
          background #f63028
          font-size 20px
          color #ffffff
          text-align center
          line-height 48px
</style>