import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '../components/myRouter/myvue-router'
import Home from '../views/Home.vue'
// 1. 使用vue-router插件
Vue.use(VueRouter)
// 2. 创建路由表：路径和组件的映射关系
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// 3. 导出router， 路由实例
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
