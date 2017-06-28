import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Info from '@/components/Info'
import Address from '@/components/Address'
import List from '@/components/List'
import User from '@/components/User'
import coupon from '@/components/coupon'
import weixin from '@/components/weixin'
import login from '@/components/login'
import pay from '@/components/pay'
Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Info/:id',
      name: 'Info',
      component: Info
    },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: coupon
    },
    ,
    {
      path: '/weixin',
      name: 'weixin',
      component: weixin
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay
    }
  ]
})
