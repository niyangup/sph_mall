import Vue from 'vue'
import Vuex from 'vuex'
import home from "@/store/home/home";
import search from "@/store/search/search";
import detail from "@/store/detail/detail";
import shopCart from "@/store/shopCart/shopCart";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    shopCart,
  },
})
