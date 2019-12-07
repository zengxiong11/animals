<template>
  <div id="">
        <header-top :title="msg">
             <router-link class="header_search" slot="left" to="/dynamic" style="color:#fff">
                <span class="header_login_text">
                    <i class="iconfont icon-fanhui"></i>
                </span>
             </router-link>
            <!--利用三元表达式来判断是否登陆-->
            <router-link class="header_login" slot="right" to="/login">
                <span class="header_login_text">
                    <i class="iconfont icon-zhuanfa"></i>
                </span>
            </router-link>
        </header-top>
       <nav class="img_nav">
            <div class="swiper-container">
                 <div class="swiper-wrapper">
                     <div class="swiper-slide">
                             <div class="img_container">
                                 <img src="../../common/imgs/2.jpg" /> 
                             </div>
                     </div>
                     
                 </div>
            </div>
       </nav>
       <div class="adopt_li">
              <div class="adopt_header">
                <img class="adopt_img" src="../../common/imgs/2.jpg">
                <div class="adopt_desc">
                  <h2 class="name">如烟</h2>
                </div>
                <div class="data">
                  <span>1天前发布</span>
                </div>
              </div>
              <div class="adopt_footer">
                  <span class="address">广州省广州市白云区地铁3号线</span>
                  <span class="visitor">查看人数</span>
              </div>
       </div>
       <div class="contnet">
           <h2>要求:</h2>
           <span>
                    在关系型数据库中，
                    我们通常将这两个对象设计成一对多的关系，
                     在关系型数据库中，
                    我们通常将这两个对象设计成一对多的关系，
                     在关系型数据库中，
                    我们通常将这两个对象设计成一对多的关系，
                     在关系型数据库中，
                    我们通常将这两个对象设计成一对多的关系，
           </span>
       </div>
    </div>
</template>

<script>
import headerTop from '../../components/HeaderTop/HeaderTop'
import {Button} from 'mint-ui'
export default {
  data() { 
    return {
        msg:'送养详情'
    }
  },
  components:{
      headerTop
  }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .img_nav
        height 250px
        margin-top 60px
        background #ffffff
        .swiper-container
            width 100%
            height 100%
            .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                    width 100%
                    height 100%
                    .img_container
                        img 
                            width 100%
                            height 250px
    .adopt_li
        border-bottom 10px solid #f5f5f5
        padding 0px 20px
        .adopt_header
            width 100%
            height 40px
            padding 20px 0px
            >img 
                width 40px
                height 40px
                border-radius 50%
                float left
            .adopt_desc
                float left
                padding-left 10px
            .data
                float right
                padding-top 15px
                font-size 10px
         .adopt_footer
              width 100%
              font-size 10px
              padding-bottom 10px
              .visitor
                float right
    .contnet
        padding-right 20px
        width 100%
        height 100%
        h2
            font-size 25px
            font-size 700
            padding 15px
        span 
            font-size 20px
</style>