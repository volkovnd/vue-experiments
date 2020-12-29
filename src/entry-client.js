import Vue from "vue";
import App from "./app.vue";

import { createApp } from "./app";

Vue.config.productionTip = false;

const { app, store } = createApp(App);

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

app.$mount("#app");
