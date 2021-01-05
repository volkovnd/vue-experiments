/** @type {import("vue-router").RouteConfig[]} */
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/home.vue")
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue")
  }
];

export default routes;
