<template>
  <div id="">
    <header-top :title="msg" />
    <example />
  </div>
</template>

<script>
import headerTop from '../../components/HeaderTop/HeaderTop.vue'
import example from '../../components/example'

export default {
  data() { 
    return {
      msg:'萌宠动态'
    }
  },
  components:{
    headerTop,
    example
  }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>