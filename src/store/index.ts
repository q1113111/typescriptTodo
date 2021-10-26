import { createStore } from 'vuex'

export default createStore({
  state: {
      test:'123'
  },
  mutations: {
      GET_TEST(state,data){
        state.test=data
      }
  },
  actions: {
      set_test({commit},data){
          commit('GET_TEST',data)
      }
  },
  modules: {
  }
})
