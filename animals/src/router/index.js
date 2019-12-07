import Vue from 'vue'
import Router from 'vue-router'
import Adopt from '../page/adopt/Adopt.vue'
import AnimalShop from '../page/animalShop/AnimalShop.vue'
import Dynamic from '../page/dynamic/Dynamic.vue'
import Profile from '../page/profile/Profile.vue'
import Login from '../page/login/login.vue'
import AdoptContent from '../page/adoptContent/adoptContent.vue'
import submitAdopt from '../page/submitAdopt/submitAdopt.vue'
import shopContent from '../page/shopContent/shopContent.vue'
import PersonData from '../page/personData/personData.vue'
import Order from '../page/order/order.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/adopt',
      component:Adopt,
      meta:{
        showFooter:true
    }
    },
    {
      path: '/animalShop',
      component:AnimalShop,
      meta:{
        showFooter:true
    }
    },
    {
      path: '/dynamic',
      component:Dynamic,
      meta:{
        showFooter:true
    }
    },
    {
      //我的
      path: '/profile',
      component:Profile,
      meta:{
        showFooter:true
    }
      },
    {
      path:'/adoptContent',
      component:AdoptContent,
      meta:{
        keepAlive: true
      }
    },
    {//个人资料
      path:'/persondata',
      component:PersonData,
    },
    {
      path:'/order',
      component:Order,
    },
    {
      path: '/login',
      component:Login,
    },
    {
      path:'/submitadopt',
      component:submitAdopt
    },
    {
      path:'/shopcontent',
      name:'shopcontent',
      component:shopContent
    },
    {
      path:'/',
      redirect:'/adopt'
    }
    
  ]
})
