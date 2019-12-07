<template>
      <div class="cartcontrol">
            <transition name="move">
                  <div class="iconfont icon-jian-tianchong" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
            </transition>
            <div class="cart-count" v-if="food.count">{{food.count}}</div>
            <div class="iconfont icon-jia" @click.stop="updateFoodCount(true)"></div>
      </div>
</template>

<script>
export default {
  props:{
        food:Object
  },
  methods: {
        updateFoodCount(isAdd){
              this.$store.dispatch('updateFoodCount',{isAdd,food:this.food})
        }
  },
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
      .cartcontrol
            font-size 0
            .icon-jian-tianchong
                  font-size 20px
                  display inline-block
                  color rgb(0, 160, 220)
                  vertical-align top
                  padding 6px
                  &.move-enter-active, &.move-leave-active
                        transition all 0.3s
                  &.move-enter,&.move-leave-to
                        opacity 0
                        transform translateX(15px) rotate(180deg) 
            .cart-count
                  width 16px
                  font-size 16px
                  display inline-block
                  padding-top 6px
                  color red
                  text-align center
                  line-height 24px
                  vertical-align top 
            .icon-jia
                  font-size 20px
                  display inline-block
                  padding 6px
                  color rgb(0, 160, 220)
</style>