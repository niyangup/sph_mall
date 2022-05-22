import axios from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css'
import store from "@/store";

const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
})

request.interceptors.request.use((config) => {

  nprogress.start()

  if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token
  }

  return config
})
request.interceptors.response.use((response) => {

  nprogress.done()

  return response.data
}, (error) => {
  return Promise.reject(new Error(error))
})
export default request
