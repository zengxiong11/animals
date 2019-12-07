/*通过mutations间接更新state数据 */
import Vue from 'vue'
import {
    RECEIVE_USERINFO,
    CLEAR_UDERINFO,
    RECEIVE_GOODS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    RECEIVE_RATINGS,
    RECEIVE_ADOPTINFO
    } from './mutation_type'

export default {
    //获取用户信息
    [RECEIVE_USERINFO](state,{userInfo}){
        state.userInfo = userInfo
    },
     //获取动物信息
    [RECEIVE_ADOPTINFO](state,{adoptInfo}){
      state.adoptInfo = adoptInfo
    },
    //重置用户信息
    [CLEAR_UDERINFO](state){
        state.userInfo = {}
    },
    //获取商品信息
    [RECEIVE_GOODS](state,{goods}){
        state.goods = goods
    },
    //获取评论信息
    [RECEIVE_RATINGS](state,{ratings}){
        state.ratings = ratings
    },
    //加入购物车
  //这里不用更新state,直接操作food
  [INCREMENT_FOOD_COUNT](state,{food}){
    if(!food.count){//第一次增加时没有count
      //food.count = 1 //(新增属性没有数据绑定)
      //vue语法需注意，为新增属性增加数据绑定
      Vue.set(food,'count',1)//传入当前对象，属性名，属性值(记住)
      state.cartFoods.push(food)//将food加入cartFood数组中
    }else{
      food.count ++
    }
  },
  //从购物车内删除
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count --
      //踩了一个大坑，这里是食物列表为零条时删除食物对应列表
      if(food.count === 0){
        //如果食物列表为零，删除食物列表
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  }
}


