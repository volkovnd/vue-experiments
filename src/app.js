import Vue from "vue";

import createStore from "@/store";
import createRouter from "@/router";
import { sync } from "vuex-router-sync";

export default App => {
  const store = createStore();
  const router = createRouter();

  sync(store, router);

  return new Vue({
    store,
    router,

    render: h => h(App)
  });
};
