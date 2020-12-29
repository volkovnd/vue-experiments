import Vue from "vue";

import { createStore } from "@/store";

export function createApp(App, state) {
  const store = createStore(state);

  const app = new Vue({
    store,

    render: h => h(App)
  });

  return { app, store };
}
