import Router from 'vue-router'
import Vue from 'vue'
import Home from './components/Home-LLC.vue'
// import Login from './components/Login-Home.vue'
// import Welcome from './components/Welcome-LLC.vue'
// import Users from './components/user/Users-LLC.vue'
// import Rigths from './components/power/Rigths-LLC.vue'
// import Roles from './components/power/Roles-LLC.vue'
// import Cate from './components/goods/Cate-LLC.vue'
// import Params from './components/goods/Params-LLC.vue'

Vue.use(Router)

export default new Router({
  routes: [ {
    path: '/home',
    component: Home
  }]
})