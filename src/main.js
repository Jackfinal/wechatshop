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
import {RedirectWeixin} from './api'

Vue.config.productionTip = false


Vue.use(MintUI)
Vue.use(Vuex)
//执行请求微信登录
RedirectWeixin(function(){});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
