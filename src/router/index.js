import Vue from "vue";
import VueRouter from "vue-router";
import leftMenu from "@/components/leftMenu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: leftMenu,
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/borderSituation",
    name: "borderSituation",
    component: () => import("@/components/borderSituation.vue"),
  },
  {
    path: "/resuable",
    name: "resuable",
    component: () => import("@/components/resuable.vue"),
  },
  {
    path: "/cssAbout",
    name: "cssAbout",
    component: () => import("@/views/cssAbout.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
