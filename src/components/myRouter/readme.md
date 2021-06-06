# vue-router原理剖析 
- vue-router作为一个vue插件存在: 实现VueRouter类和install方法
- 实现两个全局组件router-view显示匹配的组件内容，router-link用于跳转
- 监听url变化: 监听hashchang或popstate事件
- 响应最新的url： 创建一个响应式的属性current，当它改变时，获取对应组件并显示
# 实现简单自定义router
## 实现myvueRouter类
## 实现router-link组件
## 实现router-view组件

