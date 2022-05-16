import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router";
import TypeNav from "@/pages/Home/TypeNav/TypeNav";

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
