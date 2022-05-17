import {getBannerList, getCategoryList} from "@/api/api";

const state = {
  categoryList: [],
  bannerList: [],
}
const mutations = {
  saveCategory(state, payload) {
    state.categoryList = payload
    state.categoryList.pop()
  },
  saveBanner(state, payload) {
    console.log('保存banner')
    state.bannerList = payload
  },
}

const actions = {
  async getCategory(context) {
    const data = await getCategoryList()
    if (data['code'] === 200) {
      context.commit('saveCategory', data.data)
    }
  },
  async getBannerList(context) {
    const data = await getBannerList()
    if (data['code'] === 200) {
      context.commit('saveBanner', data.data)
    }
  },
}

const getters = {}


export default {
  state,
  mutations,
  getters,
  actions,
}
