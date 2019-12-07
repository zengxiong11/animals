<template>
  <header class="user_header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>
<script>
  export default {
    props: {
      title: String
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .user_header
    background #ffffff
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    border-radius 0px 0px 10px 10px
    //box-shadow 1px 2px 2px 1px #FF4200
    .header_back
      position absolute
      left 15px
      top 60%
      transform translateY(-50%)
      width 10%
      height 50%
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #000
      text-align center
      .header_title_text
        font-size 16px
        font-weight 700
        color #000
        display block
    .header_login
      font-size 14px
      color #000
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #000
</style>