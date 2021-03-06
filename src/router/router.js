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
import Trade from "@/views/Trade/Trade";
import Pay from "@/views/Pay/Pay";
import PaySuccess from "@/views/PaySuccess/PaySuccess";
import Center from "@/views/Center/Center";
import TheOrder from "@/views/Center/TheOrder/TheOrder";
import GroupOrder from "@/views/Center/GroupOrder/GroupOrder";

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
    {
      name: 'trade',
      path: '/trade',
      component: Trade,
      meta: {
        auth: true
      },
      beforeEnter: (to, from, next) => {
        if (from.name === 'shopCart') {
          next()
        } else {
          next(false)
        }
      }
    },
    {
      name: 'pay',
      path: '/pay',
      component: Pay,
      meta: {
        auth: true
      }
    },
    {
      name: 'paySuccess',
      path: '/paySuccess',
      component: PaySuccess,
      meta: {
        auth: true
      },
    },
    {
      name: 'center',
      path: '/center',
      component: Center,
      redirect: {name: 'theOrder'},
      children: [
        {
          name: 'theOrder',
          path: 'theOrder',
          component: TheOrder,
          meta: {
            auth: true
          },
        },
        {
          name: 'groupOrder',
          path: 'groupOrder',
          component: GroupOrder,
          meta: {
            auth: true
          },
        },
      ]
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
    if (to.meta.auth) {
      next({name: 'login', query: {fromName: to.name}})
    } else {
      next()
    }

  }

})
export default router
