import {registerUser} from "@/api/api";

const state = {}
const mutations = {}
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
}
const getters = {}

export default {
  state, mutations, getters, actions,
}
