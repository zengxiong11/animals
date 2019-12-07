<template>
  <div id="">
        <header-top>
            <router-link class="header_search" slot="left" to="/submitadopt">
                <i class="iconfont icon-fabu"></i>
            </router-link>
            <!--利用三元表达式来判断是否登陆-->
            <router-link class="header_login" slot="right" to='/login'>
                <span class="header_login_text">
                    <i class="iconfont icon-ren"></i>
                </span>
            </router-link>
        </header-top>
        <div class="content_wrap">
            <ul>
            <li class="img_nav">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                                <div class="img_container">
                                    <img :src="shopContent.image" /> 
                                </div>
                        </div>
                    </div>
                </div>
        </li>
        <li class="shop_contnet">
            <div class="peice_wrap">
                    <a href="javascript:;" class="price">
                        <i class="iconfont icon-yuan"></i>
                        <em class="oldPrice">{{shopContent.price}}</em>
                        <span class="priceContent">优惠价 {{shopContent.price}}￥</span>
                    </a> 
                    <a href="javascript:;" class="guide_item">
                        <span class="item_icon"> 
                            <i class="iconfont icon-jiangjiatixing42"></i> 
                        </span> 
                        <span>降价提醒</span>
                    </a> 
                <a href="javascript:;" class="guide_item">
                        <span class="item_icon"> 
                            <i class="iconfont icon-collect"></i> 
                        </span> 
                        <span>收藏</span>
                    </a> 
            </div>
            <div class="fn_wrap">
                <h1 class="fn_text_wrap">{{shopContent.description}}</h1>
                <div class="right_shorter">
                    更多优质主粮点这里 
                    <a href="javascript:;">查看</a>
                </div>
            </div>
        </li>
        <li class="guarantee">
                <span>
                    <i class="iconfont icon-maijiabaozhangfangxingou"></i>
                </span>
                <span> · 送运费险</span>
                <span> · 闪电退款</span>
                <span> · 极速审核</span>
            </li>
            <li class="preferent">
                <div class="preferent_notice">
                    <span>优惠</span>
                </div>
                <span class="coupon">满228减20</span>
                <span class="coupon">满228减20</span>
                <span class="coupon">新用户专享</span>
            </li>
            <li class="assess_content">
                <div class="assess_tag">
                    <span class="assess_info">评价</span>
                    <span class="assess">共{{shopContent.rating}}+</span>
                    <span class="assess">好评98%</span>
                </div>
            </li>
            <li>
                <shop-ratings></shop-ratings>
            </li>
        </ul>
    </div>
    <shop-cart :food="food"></shop-cart>
</div>
</template>

<script>
import headerTop from '../../components/HeaderTop/HeaderTop'
import shopRatings from '../../components/shopRatings/shopRatings'
import shopCart from '../../components/shopCart/shopCart'
import Bcroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
    data() { 
        return {
            shopContent:'',
            food:{}
        }
    },
    computed: {
        ...mapState('goods')
    },
    mounted() {
        //滑动
        this.$nextTick(()=>{
              new Bcroll('.content_wrap',{click:true})
        })
        //路由传值
        var food =  this.$route.query.shopContent
        this.shopContent = JSON.parse(food)
        console.log(this.shopContent)
    },
    components:{
            headerTop,
            shopRatings,
            shopCart
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.content_wrap
    position: absolute
    top 45px
    left 0
    right 0
    bottom 0
    width: 100%
    background: #fff;
    ul
        width 100%
        .img_nav
            height 300px
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
                                height 300px
        .shop_contnet
            height 100%
            padding 16px 10px
            .peice_wrap
                display flex
                .guide_item
                    display flex
                    flex 1
                    text-align center
                    flex-direction column
                    align-items center
                    margin 5px
                    color #999999
                    font-size 12px
                .price
                    display flex
                    flex 3
                    color red
                    .oldPrice
                        text-decoration line-through
                        font-size 25px
                        color red
                    .priceContent
                        padding-left 10px
                        font-size 12px
                        color black

                        
            .fn_wrap
                .fn_text_wrap
                    font-weight 700
                    font-size 16px
                    padding-bottom 10px
                .right_shorter
                    font-size 12px
        .guarantee
            padding 10px 0px
            color red
            background #fbf0fd
            span
                padding 0px 5px
        .preferent
            padding 10px
            border-top 8px solid gray 
            border-bottom 8px solid gray 
            .preferent_notice
                float left
            .coupon
                position relative;
                display inline-block;
                margin-right 5px;
                padding 0 12px 0 12px;
                border-top 1px solid #e4393c;
                border-bottom 1px solid #e4393c;
                height 16px;
                line-height 16px;
                color #e4393c;
                font-size 10px;
                color #fff;
                margin 0 8.5px 0 9px;
                padding 0 5.5px 0 3px;
                background-color #e4393c;
        .assess_content
            .assess_tag
                 bottom-border-1px(#ff4200)
                 padding 15px 10px
                .assess_info
                    font-size 16px 
                    font-weight 700
                .assess
                    font-size 10px
                    color red
                    float right
                    padding 0 20px
</style>