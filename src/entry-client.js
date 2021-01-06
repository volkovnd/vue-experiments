import Vue from "vue";
import App from "./app.vue";
import createApp from "./app";

import webFontsPlugin from "@/plugins/webFonts";
import baseComponents from "@/plugins/baseComponents";

Vue.config.productionTip = false;

Vue.use(baseComponents);
Vue.use(webFontsPlugin);

createApp(App).$mount("#app");

// TODO: uncomment placing initial state

// if (window.__INITIAL_STATE__) {
//   app.$store.replaceState(window.__INITIAL_STATE__);
// }
