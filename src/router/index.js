import Vue from "vue";
import VueRouter from "vue-router";
const leftMenu = () => import("@/components/leftMenu.vue");
// import leftMenu from "@/components/leftMenu.vue";
const toTop = () => import("@/components/toTop.vue");
const Home = () => import("@/views/Home.vue");
// import toTop from "@/components/toTop.vue";

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
        // component: () => import("@/views/Home.vue"),
        components: {
          default: Home,
          toTop: toTop,
        },
      },
    ],
  },
  {
    path: "/",
    component: leftMenu,
    children: [
      {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
      },
      {
        path: "/borderSituation",
        name: "borderSituation",
        component: () => import("@/components/borderSituation.vue"),
      },
      {
        path: "/resuable/:id",
        name: "resuable",
        component: () => import("@/components/resuable.vue"),
        props: true,
      },
      {
        path: "/cssAbout",
        name: "cssAbout",
        component: () => import("@/views/cssAbout.vue"),
      },
      {
        path: "/refInVFor",
        name: "refInVFor",
        component: () => import("@/views/refInVFor.vue"),
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import("../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  base: "/learn-vue-deep/",
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log("savedPosition", savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
router.beforeEach((to, from, next) => {
  console.log("to.matched", to.matched);
  next();
  // if (to.matched.some((record) => record.meta.requiresAuth)) {
  //   // this route requires auth, check if logged in
  //   // if not, redirect to login page.
  //   if (!auth.loggedIn()) {
  //     next({
  //       path: "/login",
  //       query: { redirect: to.fullPath },
  //     });
  //   } else {
  //     next();
  //   }
  // } else {
  //   next(); // 确保一定要调用 next()
  // }
});
export default router;
