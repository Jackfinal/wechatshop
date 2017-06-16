import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Info from '@/components/Info'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Info/:id',
      name: 'Info',
      component: Info
    }
  ]
})
