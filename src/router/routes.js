/** @type {import("vue-router").RouteConfig[]} */
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "@/views/about.vue")
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue")
  }
];

export default routes;
