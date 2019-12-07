//异步更新mutations

import {
    RECEIVE_USERINFO,
    CLEAR_UDERINFO,
    RECEIVE_GOODS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    RECEIVE_RATINGS,
    RECEIVE_ADOPTINFO,

} from './mutation_type'

import {
    reqUserInfo,
    reqlogout,
    reqGoods,
    reqRatings,
    reqadoptInfo
} from '../api'

export default {
    //同步记录用户信息
    reCodeUserInfo({commit},userInfo){

       commit(RECEIVE_USERINFO,{userInfo})

    },
    //异步获取用户信息
    async getUserInfo({commit}){

        const result = await reqUserInfo()
        if(result.code === 0){
            const userInfo = result.data
            commit(RECEIVE_USERINFO,{userInfo})
        }
    },
    //获取动物信息
    async getAdoptInfo({commit}){
        const result = await reqadoptInfo()
        if(result.code === 0){
        const adoptInfo = result.data
        commit(RECEIVE_ADOPTINFO,{adoptInfo})
        }
    },
    //异步重置用户信息
    async clearUserInfo({commit}){
        const result = await reqlogout()
        if(result.code === 0){
            commit(CLEAR_UDERINFO)//提交重置信息到mutation
        }
    },
    //异步获取商品信息
    async getGoods({commit},callback){//callback接收回调函数
        const result = await reqGoods()
        if(result.code === 0){
            const goods = result.data
            commit(RECEIVE_GOODS,{goods})
            callback && callback()//提醒数据更新了。通知组件
        }
    },
    //异步获取评论信息
    async getRatings({commit}){
        const result = await reqRatings()
        if(result.code === 0){
            const ratings =  result.data
            commit(RECEIVE_RATINGS,{ratings})
        }
    },
    /*//同步加减商品
    updateFoodCount({commit},{isAdd,food}){
        if(isAdd){
            commit(INCREMENT_FOOD_COUNT,{food})
        }else{
            commit(DECREMENT_FOOD_COUNT,{food})
        }
    }*/
    //同步跟新购物车列表函数
  updateFoodCount({commit},{isAdd,food}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else{
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },
}
