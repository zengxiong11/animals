
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import { Swipe, SwipeItem,Button,Field,Actionsheet} from 'mint-ui'
import "mint-ui/lib/style.css"
import './mock/mockServer'
import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant);

// 注册全局组件标签
Vue.component(Button.name, Button)  // <mt-button>
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Actionsheet.name, Actionsheet)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
