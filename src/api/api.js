import request from "@/api/request";

export function getCategoryList() {
  return request.get(`/product/getBaseCategoryList`)
}
