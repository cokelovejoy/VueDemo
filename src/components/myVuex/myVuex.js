let Vue;
// Store类
class Store {
  constructor(options = {}) {
    // 利用Vue类去给state做响应式处理
    this._vm = new Vue({
      data: {
        $$state: options.state,
      },
    });
    // 保存用户配置的mutations选项
    this._mutations = options.mutations || {};
    // 保存用户配置的actions选项
    this._actions = options.actions || {};

    // 给commit绑定上下文，否则action中调用commit时，可能出现问题
    // 给action绑定上下文，因为action中可以互相调用
    const store = this;
    const { commit, action } = this;
    this.commit = function boundCommit(type, payload) {
        console.log('2222222')
      commit.call(store, type, payload);
    };
    this.action = function boundAction(type, payload) {
      return action.call(store, type, payload);
    };
  }
  // 实现commit方法
  commit(type, payload) {
      console.log('333333')
    const entry = this._mutations[type];
    if (!entry) {
      console.error(`unknown mutation type: ${type}`);
      return;
    }
    // 指定上下文为Store实例
    entry(this.state, payload);
  }
  // 实现actions:根据用户传入type获取并执行对应action
  dispatch(type, payload) {
    // 获取用户编写的type对应的action
    const entry = this._actions[type];
    if (!entry) {
      console.error(`unknow action type: ${type}`);
      return;
    }
    // 异步结果需要返回Promise
    return entry(this, payload);
  }
  get state() {
    return this._vm._data.$$state;
  }
  set state(v) {
    console.error("please use replaceState to reset state");
  }
}
// 插件，install方法
function install(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      // 根Vue 组件时，才给Vue类原型链上增加store
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}
export default {
  Store,
  install,
};
