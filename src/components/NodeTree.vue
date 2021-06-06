<template>
  <div>
    <node :data="folder"></node>
  </div>
</template>

<script>
import node from "./Node.vue";
export default {
  components: {
    node,
  },
  data() {
    return {
      // 树形结构数据
      folder: {
        name: "vue-study",
        level: 0,
        children: [
          { name: "src", children: [{ name: "main.js", level: 2 }], level: 1 },
          { name: "package.json", level: 1 },
        ],
      },
    };
  },
};
</script>

<style></style>
