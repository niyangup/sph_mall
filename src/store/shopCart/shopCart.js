import {delCartFromListById, getCartList} from "@/api/api";

const state = {
  cartList: []
}
const mutations = {
  saveCartList(state, payload) {
    state.cartList = payload
  }
}
const actions = {
  async getCartList(context) {
    const data = await getCartList()
    if (data.code === 200) {
      context.commit('saveCartList', data.data[0].cartInfoList)
    }
  },
  async delCartById(context, id) {
    const data = await delCartFromListById(id)
    if (data.code === 200) {
      return true
    }
    return false
  }
}

const getters = {
  cartList(state) {
    return state.cartList || []
  }
}


export default {
  state, mutations, getters, actions,
}
