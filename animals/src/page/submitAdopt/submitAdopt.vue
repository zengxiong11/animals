<template>
  <div id="">
    <header-top :title="msg">
      <router-link class="header_search" slot="left" to="/adopt">
        <i class="iconfont icon-fanhui" style="color:#fff"></i>
      </router-link>
    </header-top>
        <div class="adoptInfo">
            <form enctype=‘multipart/form-data’>
                <van-cell-group>
                  <van-field
                    class="adopt"
                    v-model="adoptName"
                    clearable
                    label="宠物名"
                    placeholder="请输入宠物名"
                  />
                   <van-field
                    class="adopt"
                    v-model="adoptKind"
                    clearable
                    label="宠物类型"
                    placeholder="请输入宠物类型"
                  />
                   <van-field
                    class="adopt"
                    v-model="address"
                    clearable
                    label="地址"
                    placeholder="请输入地址"
                  />
                    <van-field
                      class="adopt"
                      v-model="dynamicContent"
                      rows="4"
                      autosize
                      type="textarea"
                      maxlength="400"
                      placeholder="请输入描述"
                      show-word-limit
                      style="height:200px"
                    />
                    <van-uploader
                      v-model="imgList"
                      :max-count="8"
                      preview-size="70px"
                      :before-read="beforeRead"
                    />
                </van-cell-group>
                <button class="adopt_submit" @click.prevent="submitArticle">发布</button>
            </form>
        </div>
  </div>
</template>

<script>
import headerTop from '../../components/HeaderTop/HeaderTop'
import {Toast} from 'vant'
import {mapState,mapActions} from 'vuex'
import { reqArticle } from '../../api';
import ajax from '../../api/ajax';
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
        dynamicContent:"",
        imgList:[]
    }
  },
  components:{
      headerTop
  },
  methods: {
    getInfo(){
      console.log(this.adoptName,this.adoptKind,this.dynamicContent,this.address,this.imgList[0].content)
      //console.log("内容" + this.dynamicContent);
      //console.log(this.imgList);
      },
    //文件类型验证 返回布尔值
    beforeRead(file) {
      if (/\.(jpe?g|png|gif)$/i.test(file.type)){
        Toast('请上传图片');
        return false;
      }
      return true;
    },
    submitArticle(e){
      this.file = event.target.files[0]
      let formdata = new FormData()
      console.log(formdata)
      formdata.append('file',this.file)
    }
    /*afterRead (file) {
    this.uploadImg(file.file)
    },*/
    /*uploadImg (file) {
    // 通过append向form对象添加数据,可以通过append继续添加数据
    //或formdata1.append('file',file);
    formdata1.append('file', file, file.name,)
    console.log(formdata1)
    //.append('file', file, file.name);
    
    }*/
  /* //异步提交宠物信息到后台
    async submitArticle(file){
      const {adoptName,adoptKind,address,dynamicContent,imgList} = this
      // 创建form对象
      let formdata1 = new FormData()
      formdata1.append('file',file,adoptName,adoptKind,address,dynamicContent)
      let result = await reqArticle()*/
      }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .adoptInfo
        width 90%
        position absolute
        top 50px
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
            margin-top 10px
          .text_area
            width 100% 
            height 100% 
            padding 10px 10px  
            box-sizing border-box 
            font 700 20px Arial
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