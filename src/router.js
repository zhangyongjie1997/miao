import Vue from "vue";
import Router from "vue-router";
import slogn from "./views/Slogn.vue";
import welcome from "./views/welcome.vue";
import mine from "./components/mine/mine.vue";
import my_col from "./components/mine/my_col.vue";
import about from "./components/mine/about.vue";
import meMiao from "./components/mine/me&miao.vue";

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
        {path:'4',component:about,meta:{title:'关于领养'}},
        {path:'5',component:meMiao,meta:{title:'我和猫猫的故事'}},
      ]
    },
  ]
});
