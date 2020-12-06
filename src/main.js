import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Logging from "./components/Logging";
import Layout from "./components/Layout";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import main from "./components/Main";
import details from "./components/details";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      component: Layout,
      children: [
        {
          path: "",
          component: main,
        },
        {
          path: "/details",
          component: details,
        },
      ],
    },
    {
      path: "/logging",
      component: Logging,
      children: [
        {
          path: "/logging/signup",
          component: SignUp,
        },
        {
          path: "/logging/login",
          component: LogIn,
        },
      ],
    },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
