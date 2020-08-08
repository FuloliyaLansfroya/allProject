import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  isCollapse: false,
  footer: [],
};

const mutations = {
  change(state) {
    state.isCollapse = !state.isCollapse;
  },
  changeFooter(state, list) {
    state.footer = list;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
