import request from "@/api/request";

import mockRequest from "@/api/mockRequest";

export function getCategoryList() {
  return request.get(`/product/getBaseCategoryList`)
}

export function getBannerList() {
  return mockRequest.get('/banner')
}

export function getFloorList() {
  return mockRequest.get('/floor')
}

export function getSearchInfo(params = {}) {
  return request.post('/list', params,)
}

export function getProductInfo(proId) {
  return request.get(`/item/${proId}`)
}

export function addOrUpdateShopCart(skuId, skuNum) {
  return request({url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post"})
}

/**
 * 获取购物车列表
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getCartList() {
  return request.get('/cart/cartList')
}

export function delCartFromListById(skuId) {
  return request.delete(`/cart/deleteCart/${skuId}`)
}
