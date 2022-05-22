import {addOrUpdateShopCart, getProductInfo} from "@/api/api";

const state = {
  proInfo: {}
}
const mutations = {
  saveProInfo(state, payload) {
    state.proInfo = payload
  }
}
const actions = {
  async getProInfo(context, payload) {
    const proInfo = await getProductInfo(payload)
    if (proInfo.code === 200) {
      context.commit('saveProInfo', proInfo.data)
    }
  },
  async addOrUpdateShopCart(context, {skuId, skuNum}) {
    const data = await addOrUpdateShopCart(skuId, skuNum)
    if (data.code === 200) {
      return true
    } else {
      throw Error('加入购物车失败')
    }
  }
}

const getters = {
  categoryView(state) {
    return state.proInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.proInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.proInfo.spuSaleAttrList || []
  }
}
export default {
  state, mutations, getters, actions,
}
