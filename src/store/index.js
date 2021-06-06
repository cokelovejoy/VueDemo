import Vue from "vue";
// import Vuex from "vuex";
import Vuex from "../components/myVuex/myVuex"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: [],
  },
  mutations: {
    addUser(state, payload) {
      console.log(state);
      state.user.push(payload);
    },
  },
  actions: {},
  modules: {},
});
