<template>
  <div class="kkb-tree">
    <tree-node v-for="item in data" :key="item.title" :model="item"></tree-node>
  </div>
</template>

<script>
// 树形组件，递归组件，用于多级菜单的显示
import TreeNode from "./TreeNode.vue";

export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  components: {
    TreeNode,
  },
};
</script>

<style scoped>
.kkb-tree {
  text-align: left;
}
</style>
