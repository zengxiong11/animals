<template>
  <div id="changeNickName">
    <van-nav-bar title="修改昵称"
                 :fixed=true
                 :border=false
                 @click-left="onClickLeft"
                 left-arrow
                 @click-right="onClickSave"
                 right-text="保存"
                 style="height:2.5rem" />
    <div style="margin-top:3rem">
      <van-cell-group title="请输入新昵称">
        <van-field v-model="nickName"
                   clearable
                   ref="field"
                   :placeholder="nickName" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() { 
    return {
        // 路由传递过来的参数 nickName
      nickName: this.$route.params.nickName,
    }
  },
  mounted() {
       this.$refs.field.focus();
  },
methods: {
    // 返回按钮
    onClickLeft () {
      this.$router.back();
    },
    // 修改昵称
    onClickSave () {
      //   console.log(this.nickName);
      if (this.nickName.length > 0) {
        let nickName = this.nickName;
        this.CHANGE_USER_NICK_NAME({ nickName });
        this.$router.back();
        Toast({
          message: '个人资料修改成功!',
          duration: 800
        })
      } else {
        Toast({
          message: '请输入昵称',
          duration: 800
        })
      }
    }
  }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#changeNickName {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
  .van-nav-bar__text {
    color: #45c763;
  }
}
</style>