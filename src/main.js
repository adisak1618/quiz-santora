import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
/* eslint-disable no-new */

console.log('hi')
// pages

import Home from './components/home'
import Login from './components/login'
Vue.use(VueRouter)

var router = new VueRouter()
router.map({
  '/login': {
    component: Login,
    auth: false
  },
  '/': {
    component: Home,
    auth: true
  }
})

router.beforeEach(function (transition, next) {
  if(transition.to.auth) {
    if (localStorage.getItem('isAuthen') === 'true') {
      transition.next()
    } else {
      router.go('/login')
    }
  } else {
    transition.next()
  }
})

router.start(App, '#app')
