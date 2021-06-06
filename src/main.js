import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // 根组件添加路由实例
  router,
  store,
  render: h => h(App)
}).$mount('#app')
