<template>
  <div id="">
    <footer class="footer_guide border-1px">
       <a href="javascript:;" @click="goto('/adopt')" class="guide_item" :class="{on:'/adopt'===$route.path}">
          <span class="item_icon"> 
            <i class="iconfont icon-chongwujiyang"></i> 
          </span> 
            <span>领养</span>
        </a> 
        <a href="javascript:;" @click="goto('/animalShop')" class="guide_item" :class="{on:'/animalShop'===$route.path}"> 
          <span class="item_icon"><i class="iconfont icon-chongwuyongpin"></i></span>
          <span>商品</span> 
        </a> 
        <a href="javascript:;" @click="goto('/dynamic')" class="guide_item" :class="{on:'/dynamic'===$route.path}">
           <span class="item_icon"><i class="iconfont icon-chongwu"></i> </span> 
           <span>动态圈</span> 
        </a> 
        <a href="javascript:;" class="guide_item" @click="goto('/profile')" :class="{on:'/profile'===$route.path}"> 
           <span class="item_icon"><i class="iconfont icon-wode"></i></span>
            <span>我的</span> 
        </a> 
      </footer>
  </div>
</template>

<script>
export default {
  data() { 
    return {

    }
  },
  methods: {
    goto(path){
      this.$router.replace(path)
    },
    isCurrent(path){
      return this.$route.path === path;
    }
  },
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl";
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #FF4200
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>