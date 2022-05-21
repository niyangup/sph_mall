import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router";
import TypeNav from "@/components/TypeNav/TypeNav";
import store from './store'
import '@/mock/mockServe'
import 'swiper/css/swiper.min.css'
import Pagination from "@/components/pagination/Pagination";

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination)
new Vue({
  render: h => h(App),
  store, router,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount('#app')
