import Mock from 'mockjs'
import data from './adoptShops.json'

//返回goods的接口
Mock.mock('/goods',{code:0,data:data.goods})
// 返回ratings的接口
Mock.mock('/ratings', {code:0, data: data.ratings})