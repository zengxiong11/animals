<template>
  <div class="on">
    <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">宠物领养</h2>
          <div class="login_header_title">
            <a href="javascript:;" :class="{on:loginWay}" @click="loginWay = true">短信登录</a>
            <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay = false">密码登录</a>
          </div>
        </div>
        <div class="login_content">
          <form @submit.prevent="login"><!--阻止表单的默认提交-->
            <div :class="{on:loginWay}"><!--切换类-->
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机号" v-model="phone"><!--看到输入框，想到双向数据绑定-->
                 <button :disabled="!rightPhone" class="get_verification"
                      :class="{right_phone: rightPhone}" @click.prevent="getCode">
                  {{computedTime>0 ? `已发送(${computedTime}s)` : '获取验证码'}}
              </button>
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
              </section>
              <section class="login_hint">
                温馨提示：未注册帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
            <div :class="{on:!loginWay}"><!--切换类-->
              <section>
                <section class="login_message">
                  <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
                </section>
                <section class="login_verification">
                  <input type="text" maxlength="8" placeholder="密码" v-model="pwd" v-if="showPwd">
                  <input type="password" maxlength="8" placeholder="密码" v-model="pwd" v-else>
                  <div class="switch_button" :class="{on:showPwd}" @click='teggerPwd'>
                    <div class="switch_circle" :class="{right:showPwd}"></div>
                    <span class="switch_text">abc</span>
                  </div>
                </section>
                <section class="login_message">
                  <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                  <img class="get_verification" src="http://localhost:4001/captcha" alt="captcha" 
                  @click="getCaptcha" ref="captcha">
                </section>
              </section>
            </div>
            <button class="login_submit">登录</button>
          </form>
          <a href="javascript:;" class="about_us">关于我们</a>
        </div>
        <a href="javascript:" class="go_back" @click="$router.back()">
          <i class="iconfont icon-back"></i>
        </a>
      </div>
    </section>
    <alert-tip :alertText="alertText" v-show="ShowAlert" @closeTip="closeTip" />
  </div>
</template>

<script>
import alertTip from '../../components/alertTip/alertTip.vue';
import {reqSmsLogin,reqSendCode,reqPwdLogin} from '../../api'

export default {
  mounted() {
  },
  data() { 
    return {
        loginWay:false,//true代表短信登陆,false代表密码登陆
        phone:'',//手机号
        computedTime:0,
        showPwd:false,//是否显示密码
        pwd:'',//密码
        code:'',//一次性验证码
        captcha:'',//验证码
        name:'',//用户名
        alertText:'',//提示文本
        ShowAlert:false//是否显示提示框 data数据不能与方法名冲突
    }
  },
  computed: {
    //动态验证手机号是否合法,在计算属性中定义 验证第二步
    rightPhone(){
      return /^1[0-9]{10}$/.test(this.phone)
    },
  },
  methods: {
    //验证码倒计时 验证第一步
    async getCode() {
      if(!this.computedTime){
        this.computedTime = 60;
      this.clearIntID =  setInterval(()=>{
        this.computedTime --
          if(this.computedTime<=0){
            clearInterval(this.clearIntID)
          }
     },1000)

     //发送ajax请求（向指定手机号发送验证码）验证第三步
       const result = await reqSendCode(this.phone)
        //如果报错
        if(result.code === 1){
          //提示错误
            this.showAlert = (result.msg)
          //停止定时器
          if(this.computedTime>0){
            this.computedTime = 0;
            clearInterval(this.clearIntID)
            this.clearIntID = undefined;
        }
      }
    }
  },
    //密码显示切换
    teggerPwd(){
      this.showPwd = !this.showPwd
    },
    
    //前台表单验证登陆
    showAlert(alertText){
      this.ShowAlert = true;
      this.alertText = alertText;
    },
    // 异步登陆
      async login () {
        let result
        // 前台表单验证
        if(this.loginWay) {  // 短信登陆
          const {rightPhone, phone, code} = this
          if(!this.rightPhone) {
            // 手机号不正确
            this.showAlert('手机号不正确')
            return
          } else if(!/^\d{6}$/.test(code)) {
            // 验证必须是6位数字
            this.showAlert('验证必须是6位数字')
            return
          }
          // 发送ajax请求短信登陆
          result = await reqSmsLogin(phone, code)

        } else {// 密码登陆
          const {name, pwd, captcha} = this
          if(!this.name) {
            // 用户名必须指定
            this.showAlert('用户名必须指定')
            return
          } else if(!this.pwd) {
            // 密码必须指定
            this.showAlert('密码必须指定')
            return
          } else if(!this.captcha) {
            // 验证码必须指定
            this.showAlert('验证码必须指定')                
            return
          }
          // 发送ajax请求密码登陆
          result = await reqPwdLogin({name, pwd, captcha})
          console.log(result)
        }

        // 停止计时
        if(this.computeTime) {
          this.computeTime = 0
          clearInterval(this.intervalId)
          this.intervalId = undefined
        }

        // 根据结果数据处理
        console.log(result.code)
        if(result.code === 0) {
          const user = result.data
          // 将user保存到vuex的state
          this.$store.dispatch('reCodeUserInfo', user)
          // 去个人中心界面
          this.$router.replace('/profile')
        } else {
          // 显示新的图片验证码
          this.getCaptcha()
          // 显示警告提示
          const msg = result.msg
          this.showAlert(msg)
        }
      },
    //改变警告框的状态
    closeTip(){
      this.ShowAlert = false;
      this.alertText = '';
    },
        getCaptcha(){
         this.$refs.captcha.src = 'http://localhost:4000/captcha?time='+Date.now()
      }
  },
  components:{
    alertTip
  }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
 .loginContainer
    width 100%
    height 100%
    background #fff
    overflow hidden
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
            font 400 40px "华文琥珀"
            color #FF4200
            text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #FF4200
              font-weight 700
              border-bottom 2px solid #FF4200
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #FF4200
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone
                  color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #FF4200
                >.switch_circle
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(30px)
            .login_hint
              margin-top 12px
              color black
              font-size 14px
              line-height 20px
              >a
                color #FF4200
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #FF4200
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color black
      .go_back
        position absolute
        top 15px
        left 15px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #FF4200
</style>