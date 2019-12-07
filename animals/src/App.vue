<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter" /><!--用于底部路由显示于隐藏-->
  </div>
</template>

<script>
import FooterGuide from '../src/components/FooterGuide/FootGuide.vue'
import {mapActions} from 'vuex'
import {reqadoptInfo} from '../src/api/index'
export default {
 async mounted() {
    //this.$store.dispatch('getUserInfo')
    this.getUserInfo()
    var result = await reqadoptInfo()
    console.log(result)
  },
  methods: {
    ...mapActions(['getUserInfo'])
  },
  data() {
    return {
      
    }
  },
  components:{
    FooterGuide
  }
}
</script>

<style>

</style>
