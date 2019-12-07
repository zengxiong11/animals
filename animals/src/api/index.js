//返回一个promise对象
//包含n个请求接口的函数模块
import ajax from './ajax'
const BASE_PATH = '/api'
//密码登陆
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE_PATH+'login_pwd',{name,pwd,captcha},'POST')
//获取短信验证码
export const reqSendCode = (phone) => ajax(BASE_PATH+'/sendcode',{phone})
//短信登陆
export const reqSmsLogin = (phone,code) =>ajax(BASE_PATH + '/login_sms',{phone,code},'PSOT')
//根据会话获取用户信息
export const reqUserInfo = () =>ajax(BASE_PATH + '/userinfo')
//用户退出登陆
export const reqlogout = () =>ajax(BASE_PATH + '/logout')//前面加路径是为了实现代理
//获取商品信息
export const reqGoods = () =>ajax('/goods')
//获取评论信息
export const reqRatings = () =>ajax('/ratings')
//输入文章详情
export const reqArticle = ({adoptName,adoptKind,address,dynamicContent,imgList}) =>ajax(BASE_PATH + '/adopt_article',formdata1,'POST')
//获取动物信息
export const reqadoptInfo = () =>ajax(BASE_PATH + '/adoptinfo')