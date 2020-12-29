import Vue from "vue";

export default function createApp(App) {
  const app = new Vue({
    render: h => h(App)
  });

  return { app };
}
