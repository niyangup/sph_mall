import request from "@/api/request";

import mockRequest from "@/api/mockRequest";

export function getCategoryList() {
  return request.get(`/product/getBaseCategoryList`)
}


export function getBannerList() {
  return mockRequest.get('/banner')
}
