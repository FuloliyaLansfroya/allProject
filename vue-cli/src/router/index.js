import Vue from "vue";
import vueRouter from "vue-router";
import hellow from "@/components/hellow.vue";
Vue.use(vueRouter);

export default new vueRouter({
  routes: [
    {
      path: "/",
      component: hellow,
    },
  ],
});
