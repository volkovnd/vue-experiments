import Vue from "vue";
import App from "./app.vue";

import { createApp } from "./app";

import webFontsPlugin from "@/plugins/webFonts";

Vue.config.productionTip = false;

Vue.use(webFontsPlugin, {
  google: {
    families: ["Open Sans:300,400,600,700:cyrillic,latin"]
  }
});

const { app, store, router } = createApp(App);

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  app.$mount("#app");
});
