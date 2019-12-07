<template>
  <div id="cart">
          <header class="head_cart">
            <span class="head_back">
                <i class="iconfont icon-fanhui"></i>
            </span>
            <span class="head_title">
                <span class="iconfont icon-jia"></span>
            </span>
        </header>
  </div>
</template>

<script>
export default {
  data() { 
    return {

    }
  }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
    #cart
        .head_cart
            background-color #fff
            position fixed
            z-index 100
            left 0
            top 0
            width 100%
            height 45px
            bottom-border-1px(gray)
            .head_back
                position absolute
                left 15px
                top 60%
                width 10%
                height 50%
                .icon-fanhui
                    font-size 20px
            .icon-jia
                position absolute
                right 15px
                top 60%
                transform translateY(-50%)
                width 10%
                height 50%
                font-size 20px
</style>