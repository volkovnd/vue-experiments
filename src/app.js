import Vue from "vue";

import { createStore } from "@/store";
import { createRouter } from "@/router";

export function createApp(App) {
  const store = createStore();
  const router = createRouter();

  const app = new Vue({
    store,
    router,

    render: h => h(App)
  });

  return { app, store, router };
}
