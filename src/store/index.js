import Vue from 'vue'
import Vuex from 'vuex'
import home from "@/store/home/home";
import search from "@/store/search/search";
import detail from "@/store/detail/detail";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
  },
})
