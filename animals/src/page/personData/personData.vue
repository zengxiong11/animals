<template>
  <div id="userCenter">
    <van-nav-bar title="个人资料"
                 :fixed=true
                 :border=false
                 @click-left="onClickLeft"
                 left-arrow />
    <div class="icon">
      <span class="title">头像</span>
      <img src="../..//common/imgs/2.jpg"
           alt="">
    </div>
    <van-cell-group>
      <van-cell title="昵称"
                is-link
                :value="userInfo.user_name"
                @click="goToChangeNickName" />
      <van-cell title="性别"
                is-link
                :value="userSex"
                @click="onChangeSex" />
      <van-cell title="生日"
                is-link
                @click="selectBrithday"
                :value="userInfo.brithday?userInfo.brithday:'未填写'" />
      <van-cell title="手机号"
                :value="userInfo.phone" />
    </van-cell-group>
    <mt-button type="danger" style="width: 100%" v-if="userInfo._id" @click="loginOut">退出登陆</mt-button>
    <!-- 时间选择器 -->
    <van-popup v-model="showDateTimePopView"
               round
               position="bottom">
      <van-datetime-picker v-model="currentDate"
                           type="date"
                           @confirm="confirm"
                           @cancel="cancel"
                           :formatter="formatter"
                           :max-date="maxDate"
                           :min-date="minDate" />
    </van-popup>
    <!-- 性别选择器 -->
    <van-popup v-model="showChooseSex"
               position="bottom"
               :style="{ height: '25%' }">
      <van-radio-group v-model="userInfo.sex">
        <van-cell-group style="margin-top:2rem"
                        @click="clickCell(radio)">
          <van-cell title="美女"
                    clickable
                    @click="radio = '1'">
            <van-radio slot="right-icon"
                       name="1"
                       checked-color="#07c160" />
          </van-cell>
          <van-cell title="帅哥"
                    clickable
                    @click="radio = '2'">
            <van-radio slot="right-icon"
                       name="2"
                       checked-color="#07c160" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-popup>
    <!--路由的出口-->
    <transition name="router-slider"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import userList from '../../components/userList/userList'
import {Button, MessageBox,Toast} from 'mint-ui'
import {mapState} from 'vuex'
// 引入时间格式化组件Moment
import Moment from 'moment'
export default {
  computed: {
    ...mapState(['userInfo'])
  },
  data() { 
    return {
      showDateTimePopView: false,
      showChooseSex: false,
      currentDate: new Date('1989/01/01'),
      // 最小时间
      minDate: new Date('1949/01/01'),
      maxDate: new Date('2019/12/31'),
      userSex:'男'
    }
  },
  components:{
    userList
  },
  methods: {
    //back
    onClickLeft () {
      this.$router.back();
    },
    // 修改昵称
    goToChangeNickName () {
      // 跳转路由并且将昵称传递过去
      this.$router.push({
        name: 'ChangeNickName',
        params: {
          nickName: this.userInfo.name
        }
      });
    },
    // 修改性别
    onChangeSex () {
      this.showChooseSex = true;
    },
    clickCell (radio) {
      let sex = radio;
      this.USER_INFO_SEX({ sex });
      setTimeout(() => {
        this.showChooseSex = false;
        Toast({
          message: '个人资料修改成功',
          duration: 800
        })
      }, 300);
    },
    // 选择生日
    selectBrithday () {
      this.showDateTimePopView = true;
    },
    // 格式化DateTime pickView
    formatter (type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      } else if (type === 'day') {
        return `${value}日`
      }
      return value;
    },
    // DateTime pcikView 确定
    confirm (value) {
      let brithday = Moment(value).format("YYYY年MM月DD日");
      this.brithdayText = brithday;
      this.USER_INFO_BRITHDAY({ brithday });
      this.showDateTimePopView = false;
      Toast({
        message: '个人资料修改成功!',
        duration: 800
      })
    },
    // DateTimt pickView 取消
    cancel () {
      this.showDateTimePopView = false;
    },
     handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isIMG = ['image/jpeg','image/png','iamge/jpg'].includes(file.type);
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isIMG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isIMG && isLt2M;
      },
      //退出登陆相关逻辑 利用mint-ui
    loginOut(){
      MessageBox.confirm('确定退出吗').then
      (action => {
        //请求退出 action跳转
        this.$store.dispatch('clearUserInfo')
        this.$router.push('/profile')
        Toast('退出成功')
        },
       action =>{//取消跳转，点击往哪跳
         
       }
        );
    }
  }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  #userCenter {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
  .icon {
    display: flex;
    height: 3rem;
    width: 100%;
    margin-top: 3rem;
    padding: 0 16px;
    background-color: #ffffff;
    align-items: center;
    .title {
      height: 3rem;
      line-height: 3rem;
      color: #323233;
      font-size: 14px;
    }
    img {
      position: absolute;
      right: 1.6rem;
      height: 2.5rem;
      width: 2.5rem;
    }
  }
  /*转场动画*/
  .router-slider-enter-active,
  .router-slider-leave-active {
    transition: all 0.3s;
  }

  .router-slider-enter,
  .router-slider-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
}
</style>