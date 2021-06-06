<template>
  <div @click="toggle" :style="{ paddingLeft: level - 1 + 'em' }">
    <label>{{ model.title }}</label>
    <span v-if="isFolder">[{{ open ? "-" : "+" }}]</span>
    <div v-show="open" v-if="isFolder">
      <tree-node
        class="item"
        v-for="model in model.children"
        :model="model"
        :key="model.title"
        :level="level + 1"
      ></tree-node>
    </div>
  </div>
</template>

<script>
// 树型组件，菜单
export default {
  name: "tree-node",
  props: {
    model: Object,
    level: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length;
    },
  },
  methods: {
    toggle(event) {
      event.stopPropagation();
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
  },
};
</script>

<style></style>
