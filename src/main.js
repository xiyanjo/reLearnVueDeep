import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);
Vue.config.productionTip = false;

Vue.component("blog-post", {
  props: ["post"],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
