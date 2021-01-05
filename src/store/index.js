import Vue from "vue";
import Vuex, { Store } from "vuex";

import { loadModules } from "./modules";

Vue.use(Vuex);

export default () => {
  const modules = loadModules();

  return new Store({
    modules,
    strict: process.env.NODE_ENV !== "production"
  });
};
