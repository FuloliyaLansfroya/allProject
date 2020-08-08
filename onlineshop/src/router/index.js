import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/templates/main'
import Shop from '@/templates/shop'
import Details from '@/templates/details'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      component:Main,
    },
    {
      path: '/shop',
      component:Shop,
    },
    {
      path: '/details',
      component:Details,
    }
  ]
})
