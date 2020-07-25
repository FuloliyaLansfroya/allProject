import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import login from '@/components/login'
import method from '@/components/method'
import method_2 from '@/components/method_2'
import page from  '@/components/page'
import minework from '@/components/minework'
import comment from '@/components/comment'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/page',
      name:'page',
      component:page
    },{
      path:'/minework',
      name:'minework',
      component:minework
    },{
      path:'/comment',
      name:'comment',
      component:comment
    }
  ]
})
