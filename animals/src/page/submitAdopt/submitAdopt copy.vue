<template>
  <div id="">
    <header-top :title="msg">
      <router-link class="header_search" slot="left" to="/submitadopt">
        <i class="iconfont icon-fanhui" style="color:#fff"></i>
      </router-link>
    </header-top>
        <div class="adoptInfo">
            <form enctype=‘multipart/form-data’>
                <mt-field class="adopt" label="宠物名" placeholder="请输入信息" v-model="adoptName"></mt-field>
                <mt-field class="adopt" label="宠物类型" placeholder="请输入信息" v-model="adoptKind"></mt-field>
                <mt-field class="adopt" label="地址" placeholder="请输入信息" v-model="address"></mt-field>
                <mt-field class="adopt" label="注备领养信息" placeholder="请输入信息" type="textarea" rows="6" v-model="gist"></mt-field>
                <input type="file" multiple accept="image/*"  @change="changeImage($event)" ref="avatarInput" />
                <button class="adopt_submit" @click.prevent="getInfo">发布</button>
            </form>
        </div>
  </div>
</template>

<script>
import headerTop from '../../components/HeaderTop/HeaderTop'
import picSubmit from '../../components/picSubmit/picSubmit'
import {mapState,mapActions} from 'vuex'
import { reqArticle } from '../../api';
export default {
    computed: {
        ...mapState(['userInfo'])
    },
  data() { 
    return {
        msg:'发布信息',
        adoptName:"",
        adoptKind:"",
        address:"",
        gist:'',
    }
  },
  components:{
      headerTop
  },
  methods: {
    getInfo(){
      console.log(this.adoptName,this.adoptKind,this.gist,this.address)
      },
    //异步提交宠物信息到后台
    async submitArticle(){
      const {adoptName,adoptKind,gist} = this
      let result = await reqArticle({adoptName,adoptKind,gist})
      },
    // 上传图片事件
    changeImage(e) {
      // 上传图片事件
      var files = this.$refs.avatarInput.files;
      var that = this;
      function readAndPreview(file) {
        //Make sure `file.name` matches our extensions criteria
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
          var reader = new FileReader();
          reader.onload = function(e) {
            
          }
          reader.readAsDataURL(file);
        }
      }
      if (files) {
        [].forEach.call(files, readAndPreview);
      }
      if (files.length === 0) {
        return;
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .adoptInfo
        width 90%
        position absolute
        top 80px
        left 0
        right 0
        margin 0 auto
        >form
          .adopt
            width 100% 
            height 100% 
            padding-left 10px 
            box-sizing border-box 
            border 1px solid #FF4200
            border-radius 4px 
            outline 0 
            font 700 16px Arial 
            margin-top 10px
          .text_area
            width 100% 
            height 100% 
            padding 10px 10px  
            box-sizing border-box 
            font 700 20px Arial
            border-style none
            &:focus
              border-style none
          .adopt_submit
              width 100%
              height 48px
              background #FF4200
              font-size 20px
              font-weight 700
              color #ffffff
              border none
              margin-top 20px
</style>