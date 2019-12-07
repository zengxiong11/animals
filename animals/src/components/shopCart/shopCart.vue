<template>
  <div id="shop_cart">
    <div class="shop_link">
        <a href="javascript:;" class="service">
            <span>
                <i class="iconfont icon-serve"></i>
            </span>
            <span class="text">客服</span>
        </a>
        <a href="javascript:;" class="service">
            <span>
                 <i class="iconfont icon-dianpu"></i>
            </span>
            <span class="text">店铺</span>
        </a>
    </div>
    <div class="add_cart" @click="updateFoodCount">
        <span>立即购买</span>
    </div>
    <div class="shop_buy">
        <router-link to="/order"><span>结算</span></router-link>
    </div>

  </div>
</template>

<script>
export default {
     props:{
        food:Object
    },
    methods: {
        updateFoodCount(isAdd){
            this.$store.dispatch('updateFoodCount',{isAdd,food:this.food})
        }
    }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #shop_cart
        position fixed
        width 100%
        height 50px
        bottom 0
        display flex
        .shop_link
            flex 1
            display flex
            background black
            .service
                display flex
                flex 1
                text-align center
                flex-direction column
                margin 10px
                color #fff
                .iconfont
                    font-size 16px 
                .text
                    font-size 14px        
        .add_cart
            flex 1
            text-align center
            line-height 50px
            background: -moz-linear-gradient(top, #f63028 0%, #f63028 100%);
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f63028), color-stop(100%,#FC554d));
            background: -webkit-linear-gradient(top, #f63028 0%,#FC554d 100%);
            background: -o-linear-gradient(right, #f63028 0%,#FC554d 100%);
            background: -ms-linear-gradient(top, #f63028 0%,#FC554d 100%);
            background: linear-gradient(to right, #f63028 0%,#FC554d 100%);
            span 
                font-size 16px
                color #fff
                font-weight 700
        .shop_buy
            flex 1
            background red
            text-align center
            line-height 50px
            background: linear-gradient(to right, #fd374f 0%,#ff9c7c 100%);
            span 
                font-size 16px
                color #fff
                font-weight 700
</style>