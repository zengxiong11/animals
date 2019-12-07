<template>
    <div class="star" :class="'star-'+size">

        <span class="star-item" v-for="(sc, index) in starClasses" :class="sc" :key="index"></span>
    </div>
</template>

<script>
//将要变化的星定义成常量
const CLASS_ON = 'on';
const CLASS_HALF = 'half';
const CLASS_OFF = 'off';//记住是字符串
  export default {
      //props接收来自父组件的属性设计非常重要
    props: {
      score: Number,
      size: Number
    },
    //一般随数据变化的值都要用到计算属性
    computed: {
        starClasses(){
            const {score} = this;
            const scs = [];
            //不同星个数的变化逻辑
            //1.向scs中添加n个on
            //评分向下取整
            const scoreInteger = Math.floor(score);
            for(let i=0;i<scoreInteger;i++){
                scs.push(CLASS_ON);
            }
            //2.向scs中添加1/0个half,
            //小数部分大于等于0.5
            if((score-scoreInteger)*10>=5){
                scs.push(CLASS_HALF);
            }
            //3.向scs中添加n个off
            while(scs.length<5){
                scs.push(CLASS_OFF);
            }
            return scs;
        }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>