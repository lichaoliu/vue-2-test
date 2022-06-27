import Router from 'vue-router'
import Vue from 'vue'
import Home from './components/Home-LLC.vue'
import Login from './components/Login-Home.vue'
import Welcome from './components/Welcome-LLC.vue'
import Users from './components/user/Users-LLC.vue'
import Rigths from './components/power/Rigths-LLC.vue'
import Roles from './components/power/Roles-LLC.vue'
import Cate from './components/goods/Cate-LLC.vue'
import Params from './components/goods/Params-LLC.vue'
import List from './components/goods/List-LLC.vue'
import Add from './components/goods/Goods-Add.vue'
import Order from './components/order/Order-LLC.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [{
      path: '/welcome',
      component: Welcome
    }, {
      path: '/users',
      component: Users
    }, {
      path: '/rights',
      component: Rigths
    }, {
      path: '/roles',
      component: Roles
    }, {
      path: '/categories',
      component: Cate
    }, {
      path: '/params',
      component: Params
    }, {
      path: '/goods',
      component: List
    }, {
      path: '/goods/add',
      component: Add
    }, {
      path: '/orders',
      component: Order
    }]
  }]
})