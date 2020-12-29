import Vue from "vue";
import App from "./app.vue";
import createApp from "./app";

Vue.config.productionTip = false;

const { app } = createApp(App);

app.$mount("#app");
