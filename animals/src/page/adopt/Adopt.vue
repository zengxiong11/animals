<template>
  <div>
      <header-top :title="msg">
      <router-link class="header_search" slot="left" to="/submitadopt">
        <i class="iconfont icon-fabu"></i>
      </router-link>
      <!--利用三元表达式来判断是否登
      <router-link class="header_login" slot="right" :to="userInfo._id ? '/personData':'/login'">
        <span class="header_login_text" v-if="!userInfo._id">
          登录|注册
        </span>
       <span class="header_login_text" v-else>
           <i class="iconfont icon-ren"></i>
        </span>
      </router-link>-->
      </header-top>
      <div class="adopt_container">
       <ul class="adopt_list">
          <li class="adopt_li" v-for="(adopt, index) in adoptInfo" :key="index">
            <router-link class="adopt_a" to="/adoptContent">
              <div class="adopt_header">
                <img class="adopt_img" src="../../common/imgs/2.jpg">
                <div class="adopt_desc">
                  <h2 class="name"></h2>
                  <span class="adopt_kind">{{adopt.adoptName}}</span>
                </div>
                <div class="data">
                  <span>{{adopt.data}}</span>
                </div>
              </div>
              <div class="adopt_middle">
                <div class="left">
                  <img :src="adopt.imgList" />
                </div>
                <div class="right">
                  <span>
                    {{adopt.dynamicContent}}
                  </span>
                </div>
              </div>
              <div class="adopt_footer">
                  <span class="address">{{adopt.address}}</span>
              </div>
            </router-link>
          </li>
       </ul>
      </div>
  </div>
  
</template>

<script>
import headerTop from '../../components/HeaderTop/HeaderTop.vue'
import {mapState,mapActions} from 'vuex'
import { reqadoptInfo } from '../../api'
export default {
  computed: {
    ...mapState(['adoptInfo'])
  },
   mounted() {
      this.$store.dispatch('getAdoptInfo')
  },
  data() { 
    return {
      msg:'宠物领养'
    }
  },
  components:{
    headerTop
  }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .adopt_container
     width 100%
     height 100%
     margin-top 40px
     background #ffffff
     overflow:hidden
     .adopt_list
        .adopt_li
          padding-right 5px
          width 100%
          border-bottom 15px solid #f5f5f5
          .adopt_a
            clearFix() 
            display block 
            box-sizing border-box 
            padding 15px 8px 
            width 100%
            .adopt_header
              width 100%
              height 40px
              >img 
                width 40px
                height 40px
                border-radius 50%
                float left
              .adopt_desc
                float left
                padding-left 10px
                .name
                  padding-bottom 5px
                  font-weight bolder
                  color black
                .adopt_kind
                  font-size 10px
              .data
                float right
                padding-top 15px
                font-size 10px
            .adopt_middle
              display flex
              height 100%
              padding 20px 0px
              .left
                flex 1
                padding-right 10px
                >img
                  width 100px
                  height 100px
              .right
                height 100%
                color black
                display -webkit-box
                -webkit-box-orient vertical
                -webkit-line-clamp 7
                overflow hidden
            .adopt_footer
              width 100%
              font-size 10px
              .visitor
                float right
                padding-bottom 10px
              

</style>