import {getUserinfo, login, registerUser} from "@/api/api";

const state = {
  token: '',
  userinfo: {},
}
const mutations = {
  saveToken(state, token) {
    state.token = token
  },
  saveUserinfo(state, userinfo) {
    state.userinfo = userinfo
  }
}
const actions = {

  async userRegister(context, user) {
    let result = await registerUser(user);
    console.log(result)
    if (result.code === 200) {
      return true;
    } else {
      throw new Error(result.message);
    }
  },

  async login(context, payload) {
    const data = await login(payload)
    if (data.code === 200) {
      context.commit('saveToken', data.data.token)
      return true
    }
    throw new Error(data.message)
  },
  async getUserinfo(context) {
    const data = await getUserinfo()
    if (data.code === 200) {
      context.commit('saveUserinfo', data.data)
    } else {
      throw new Error(data.message)
    }
  }
}
const getters = {}

export default {
  state, mutations, getters, actions,
}
