// 根据当前路由路径，动态获取对应的组件
export default {
  render(h) {
    // let component = null;
    // this.$router.$options.routes.forEach((route) => {
    //   if (route.path === this.$router.current) {
    //     component = route.component;
    //   }
    // });
    const { routeMap, current } = this.$router;
    const component = routeMap[current] ? routeMap[current].component : null;
    return h(component);
  },
};
