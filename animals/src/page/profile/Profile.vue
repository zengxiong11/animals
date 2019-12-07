<template>
  <div class="profile">
      <headerTop :title="msg" />
      <section class="profile_number">
        <router-link class="profile_link" :to="userInfo._id ? '/persondata':'/login'">
          <div class="profile_image">
            <img src="../../common/imgs/dog.jpg" />
          </div>
          <div class="user-info">
            <keep-alive>
            <p class="user-info-top" v-if="!userInfo.phone">{{userInfo.name || '登陆注册'}}</p>
            </keep-alive>
             <p>
                <span class="user-icon">
                  <i class="iconfont icon-shouji icon-mobile"></i>
                </span>
                <span class="icon-mobile-number">{{userInfo.phone || '没有绑定手机号'}}</span>
              </p>
          </div>
        </router-link>
      </section>
      <section class="user_text">
        <van-cell-group>
            <!--地址-->
            <router-link to="/">
              <van-cell title="我的收货地址"
                      icon="todo-list"
                      is-link
                      @click="goToMyAddredd">
              </van-cell>
            </router-link>
            <!--订单-->
            <van-cell title="我的订单"
                      icon="label"
                      value="查看全部订单"
                      is-link
                      >
            </van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-cell title="联系客服"
                  icon="phone"
                  value="客服时间 07:00-22:00"
                  is-link>
            </van-cell>
            <van-cell title="意见反馈"
                  icon="comment-circle"
                  is-link>
            </van-cell>
        </van-cell-group>
      </section>
  </div>
</template>

<script>
import headerTop from '../../components/HeaderTop/HeaderTop.vue'
import {mapState} from 'vuex'
import {reqUserInfo} from '../../api'
export default {
  computed: {
    ...mapState(['userInfo'])
  },
  mounted() {
  
  },
  data() { 
    return {
      msg:'我的'
    }
  },
  components:{
    headerTop
  },
  methods: {
    goTomyOrder(){
      alert('1111')
    },
    goToMyAddredd(){
      // 判断并地址路由
        if(this.userInfo._id){
          this.$router.push({ name: 'addaddress' })
      }else{
          this.$router.push('/login')
      }
    }
  },
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
    .profile
      width:100%
      .profile_number
        margin-top 45px
        background #ffffff
        border-bottom 10px solid #ff4200
        .profile_link
          clearFix()
          position relative
          .profile_image
            margin 0 auto
            width 50px
            height 50px
            padding 20px 0 20px 0
            img
              width:50px 
              height:50px
              border-radius 50%
          .user-info
            text-align center
            padding-bottom 40px
      .user_text
        .van-cell__left-icon 
          color: #ff4200;
          font-size: 16px;
</style>