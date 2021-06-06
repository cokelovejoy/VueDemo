<template>
  <div>
    <div :style="{marginLeft:indent+'em'}" style="text-align:left">--{{ data.name }}</div>
    <!--  有条件嵌套 -->
    <node v-for="n in data.children" :key="n.name" :data="n" :level="n.level"></node>
  </div>
</template>

<script>
// 递归组件
// 递归组件是可以在它们⾃⼰模板中调⽤⾃身的组件。
export default {
  name: "Node", // name 对于递归组件是必须的
  props: {
    data: {
      type: Object,
      require: true,
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  computed: {
      indent() {
          return this.level * 2;
      }
  }
};
</script>

<style></style>
