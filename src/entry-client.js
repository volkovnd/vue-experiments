import Vue from "vue";
import App from "./app.vue";
import createApp from "./app";

import webFontsPlugin from "@/plugins/webFonts";

Vue.config.productionTip = false;

Vue.use(webFontsPlugin);

createApp(App).$mount("#app");

// TODO: uncomment placing initial state

// if (window.__INITIAL_STATE__) {
//   app.$store.replaceState(window.__INITIAL_STATE__);
// }
