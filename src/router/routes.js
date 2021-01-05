/** @type {import("vue-router").RouteConfig[]} */
const routes = [
  {
    path: "/",
    name: "home",
    component: () => LazyLoadView(import(/* webpackChunkName: "home" */ "@/views/home.vue"))
  },
  {
    path: "/about",
    name: "about",
    component: () => LazyLoadView(import(/* webpackChunkName: "about" */ "@/views/about.vue"))
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => LazyLoadView(import(/* webpackChunkName: "contacts" */ "@/views/contacts.vue"))
  },
  {
    path: "/catalog",
    name: "catalog",
    component: () => LazyLoadView(import(/* webpackChunkName: "catalog" */ "@/views/catalog.vue"))
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue")
  }
];

export default routes;

function LazyLoadView(componentAsyncImport) {
  const viewComponent = () => ({
    component: componentAsyncImport,
    delay: 200
  });

  return Promise.resolve({
    functional: true,
    render: (h, { data, children }) => h(viewComponent, data, children)
  });
}
