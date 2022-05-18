import {getSearchInfo} from "@/api/api";

const state = {
  searchList: {}
}
const mutations = {
  saveSearchList(state, payload) {
    state.searchList = payload
  }
}
const actions = {
  async getSearchList(context, params) {
    const result = await getSearchInfo(params);
    if (result['code'] === 200) {
      context.commit("saveSearchList", result.data);
    }
  },
}
const getters = {
  goodsList(state) {
    return state.searchList.goodsList ?? []
  },
  trademarkList(state) {
    return state.searchList.trademarkList || [];
  },
  attrsList(state) {
    return state.searchList.attrsList || [];
  }
}


export default {
  state, mutations, getters, actions,
}
