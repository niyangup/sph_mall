import {getBannerList, getCategoryList, getFloorList} from "@/api/api";

const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
}
const mutations = {
  saveCategory(state, payload) {
    state.categoryList = payload.slice(0, 16)
  },
  saveBanner(state, payload) {
    state.bannerList = payload
  },
  saveFloor(state, payload) {
    state.floorList = payload
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
  async getFloorList(context) {
    const data = await getFloorList()
    if (data['code'] === 200) {
      context.commit('saveFloor', data.data)
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
