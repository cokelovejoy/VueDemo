<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{ getuser }}
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  created() {
    this.$store.commit('addUser', 'jack')
  },
  computed: {
    getuser() {
      return this.$store.state.user;
    },
  },
};
</script>
