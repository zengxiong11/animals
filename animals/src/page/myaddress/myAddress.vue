<template>
  <div id="myaddress">
          <van-nav-bar title="我的地址"
                 left-arrow
                 :fixed=true
                 :border=true
                 @click-left="onClickLeft">
          </van-nav-bar>
          <div class="noDataPlaceHold">
              <img src="../../common/imgs/noAddress.png">
              <p class="adress_text">你还没有添加任何地址，添加一个吧</p>
          </div>
          <div class="my_adress">
            <ul>
              <li>
                <div class="">
                  
                </div>
              </li>
            </ul>
            <button class="add_address" @click="$router.push('/profile/addaddress')">+增加新地址</button>
        </div>
  </div>
</template>

<script>
import {Toast} from 'vant'
export default {
  computed: {
    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },
    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },
  data() { 
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      shippingAddress:[1],
      list: [{
        name: '张三',
        tel: '13000000000',
        id: 0
      }]
    }
  },
  methods: {
    onClickLeft(){
      this.$router.back()
    }
  }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #myaddress
    position absolute
    left 0
    right 0
    top 45px
    bottom 0
    .noDataPlaceHold
      width 100%
      height 100%
      display flex
      flex-direction column
      justify-content center
      align-items center
      img 
        width 40%
        height 20%
      .adress_text
        font-size 12px
    .my_adress

      .add_address
        position fixed
        left 10%
        bottom 0
        width 80%
        height 50px
        background red
        border-radius 25px
        color #fff
        border none
</style>