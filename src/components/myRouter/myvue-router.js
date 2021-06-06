import Link from './myrouter-link'
import View from './myrouter-view'
let Vue; // Vue-Router和Vue强关联，引用构造函数，VueRouter中要使用
// router类
class MyvueRouter {
  constructor(options) {
    // 保存options
    this.$options = options;
    // 缓存path和route映射关系
    this.routeMap = {};
    this.$options.routes.forEach((route) => {
      this.routeMap[route.path] = route;
    });
    // current应该是响应式
    Vue.util.defineReactive(this, "current", "/");

    // 定义响应式的属性current
    const initial = window.location.hash.slice(1) || "/";
    Vue.util.defineReactive(this, "current", initial);
    // 监听hashchange事件
    window.addEventListener("hashchange", this.onHashChange.bind(this));
    window.addEventListener("load", this.onHashChange.bind(this));
  }
  onHashChange() {
    this.current = window.location.hash.slice(1);
  }
}
// Vue插件引用router，需要实现install方法，注册$router
MyvueRouter.install = function(_Vue) {
  Vue = _Vue; // 保存Vue实例
  // 挂载$router.
  // ⽤混⼊⽅式写是因为use代码在前，Router实例创建在后，⽽install逻辑⼜需要⽤到该实例
  Vue.mixin({
    beforeCreate() {
      // 只有根组件拥有router选项
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    }
  });
  // 实现两个全局组件router-link 和router-view
  Vue.component("router-link", Link);
  Vue.component("router-view", View);
};
export default MyvueRouter;
