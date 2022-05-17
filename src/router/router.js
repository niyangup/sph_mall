import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home";
import Login from "@/views/Login/Login";
import Search from "@/views/Search/Search";
import Register from "@/views/Register/Register";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home,
      alias: "/",
      meta: {showFooter: true},
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
      meta: {showFooter: false},
    },
    {
      name: 'search',
      path: '/search/:keyword',
      component: Search,
      meta: {showFooter: true},

    },
    {
      name: 'register',
      path: '/register',
      component: Register,
      meta: {showFooter: false},
    },
  ]
})
