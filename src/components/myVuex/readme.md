# Vuex 原理剖析
概念
- state 状态（数据）
- mutations 更改状态的函数
- actions 异步操作
- store 包含以上概念的容器

通过插件的方式引入vuex，要实现install方法。声明Store类，挂载$store。
具体实现：
- 创建响应式的state,保存数据。保存定义的mutations，actions和getters。
- 实现commit根据用户传入的type执行对应mutation。
- 实现dispatch更具用户传入的type执行对应action，同时传递上下文。
- 实现getter，按照getter定义对state做派生。
# 实现简单自定义Vuex
## 实现Store类
## 实现install方法