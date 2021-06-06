// 事件总线，任意两个组件之间传值
// on 的一方接受数据，emit的一样传递数据
// 因为vue自带$om,$emit,可以利用vue实例作为事件总线
class Bus {
    constructor() {
        this.callBacks = {}
    }
    // 订阅事件
    $on(name, fn) {
        this.callBacks[name] = this.callBacks[name] || [];
        this.callBacks[name].push(fn);
    }
    // 触发事件
    $emit(name, args) {
        if (this.callbacks[name]) {
            this.callBacks[name].forEach(cb => cb(args))
        }
    }
}

Vue.prototype.$bus = new Bus();
// child 1, 订阅事件，事件触发时，执行指定的回调函数
this.$bus.$on('foo', handle);
// child 2，触发事件, 一般将数据传入，可以让child1 组件拿到数据。
this.$bus.$emit('foo', args)