import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home";
import Login from "@/views/Login/Login";
import Register from "@/views/Register/Register";
import Search from "@/views/Search/Search";
import Detail from "@/views/Detail/Detail";
import AddCartSuccess from "@/views/AddCartSuccess/AddCartSuccess";
import ShopCart from "@/views/ShopCart/ShopCart";
import store from "@/store";

Vue.use(VueRouter)

const router = new VueRouter({
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
    {
      name: 'detail',
      path: '/detail/:skid',
      component: Detail,
    },
    {
      name: 'addCartSuccess',
      path: '/addCartSuccess',
      component: AddCartSuccess,
    },
    {
      name: 'shopCart',
      path: '/shopCart',
      component: ShopCart,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {y: 0}
  }
})

router.beforeEach((to, from, next) => {
  const token = store.state.user.token
  const name = store.state.user.userinfo.name
  if (token) {
    if (to.name === 'login' || to.name === 'register') {
      next({name: 'home'})
    } else {
      if (!name) {
        store.dispatch("getUserinfo").then(() => {
          next()
        }, () => {
          store.dispatch("logout").then()
          next({name: 'login'})
        })
      } else {
        next()
      }

    }
  } else {
    next()
  }

})
export default router
