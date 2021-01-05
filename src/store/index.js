import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

export default () => {
  return new Store({
    state: () => ({}),
    mutations: {},
    actions: {},
    getters: {},
    strict: process.env.NODE_ENV !== "production"
  });
};
