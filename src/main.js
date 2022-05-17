import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router";
import TypeNav from "@/components/TypeNav/TypeNav";
import store from './store'
import '@/mock/mockServe'
import 'swiper/css/swiper.min.css'

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
new Vue({
  render: h => h(App),
  store, router
}).$mount('#app')
