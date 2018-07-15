import Vue from "vue";
import Router from "vue-router";
import Slogan from "./views/Slogan.vue";
import welcome from "./views/welcome.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "slogan",
      component: Slogan,
      meta:{title:'公益猫'}
    },
    {
      path: "/welcome",
      name: "welcome",
      component: welcome,
      meta:{title:'加入公益猫'}
    },
  ]
});
