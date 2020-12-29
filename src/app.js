import Vue from "vue";

import { createStore } from "@/store";
import { createRouter } from "@/router";
import { sync } from "vuex-router-sync";

export function createApp(App) {
  const store = createStore();
  const router = createRouter();

  sync(store, router);

  const app = new Vue({
    store,
    router,

    render: h => h(App)
  });

  return { app, store, router };
}
