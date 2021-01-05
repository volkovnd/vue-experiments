import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

export default () => {
  return new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: "",
    linkExactActiveClass: "active"
  });
};
