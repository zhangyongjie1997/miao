import Vue from "vue";
import Router from "vue-router";
import slogn from "./views/Slogn.vue";
import welcome from "./views/welcome.vue";
import mine from "./components/mine/mine.vue";
import my_col from "./components/mine/my_col.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/111",
      name: "slogan",
      component: slogn,
      meta:{title:'公益猫'}
    },
    {
      path: "/welcome",
      name: "welcome",
      component: welcome,
      meta:{title:'加入公益猫'}
    },
    {
      path: "/",
      name: "mine",
      component: mine,
      meta:{title:'我的'},
      children:[
        {path:'0'},
        {path:'1'},
        {path:'2'},
        {path:'3',component:my_col,meta:{title:'我的收藏'}},
        {path:'4'},
        {path:'5'},
      ]
    },
  ]
});
