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
