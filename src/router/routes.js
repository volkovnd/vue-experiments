/** @type {import("vue-router").RouteConfig[]} */
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/home.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import(/* webpackChunkName: "not-found" */ "@/views/404.vue")
  },
  {
    path: "*",
    redirect: "404"
  }
];

export default routes;
