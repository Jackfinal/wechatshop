// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/styles/common.css'
import './assets/fonts/iconfont'
import store from './store'

Vue.use(require('vue-wechat-title'))

Vue.config.productionTip = false


Vue.use(MintUI)
Vue.use(Vuex)

//store.dispatch('saveUser', NULL)
//注册标题全局指令
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.title
  }
})

//执行请求微信登录

router.beforeEach((to, from, next) => {
  if(to.name != 'login' && to.name != 'weixin')
  {
    let user = store.state.user;
    //let user = {id:null};
    if (user && user.id) {
      next();
    } else {
      next({
        path:'/login',
        query:''
      })
    }
  }else{
    next();
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
