import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import Login from '@/components/before/login'
import Home from '@/components/main/home'
import tags from '@/components/main/tags'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/tags',
      name: 'tags',
      component: tags
    },
     {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[]
    },
    {
        path: '/test1',
        name: 'test',
        component: test
    
      }
    
  ]
})
