//包含多个基于state的计算属性对象
    /*
包含多个基于state的getter计算属性的对象
 */
export default {
    //加入购物车的食物条数
    totalCount(state){
        return state.cartFoods.reduce((preTotal,food) => preTotal + food.count,0) 
    },
    //购物车食物价格
    totalPrice(state){
        return state.cartFoods.reduce((preTotal,food) => preTotal + food.count*food.price,0) 
    },
    //满意评价条数
    positiveSize(state){
        return state.ratings.reduce((preTotal,rating) => preTotal + (rating.rateType===0?1:0),0) 
    }
}