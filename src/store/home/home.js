import {getCategoryList} from "@/api/api";

const state = {
  categoryList: []
}
const mutations = {
  saveCategory(state, payload) {
    state.categoryList = payload
    state.categoryList.pop()
  }
}

const actions = {
  async getCategory(context) {
    const data = await getCategoryList()
    if (data['code'] === 200) {
      context.commit('saveCategory', data.data)
    }
  }
}

const getters = {

}


export default {
  state,
  mutations,
  getters,
  actions,
}
