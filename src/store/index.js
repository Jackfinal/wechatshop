import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: localStorage.getItem('accessToken') || '',
    oppenid: localStorage.getItem('accessToken') || '',
    loading: false,
    showFooter: true,

  },
  mutations: {
    [types.SAVE_ACCESSTOKEN](state, code) {
      localStorage.setItem('accessToken', code)
      state.accessToken = code
    },
    [types.SAVE_USER](state, user) {
      localStorage.setItem('user', JSON.stringify(user))
      state.user = user
    },
    [types.CHANGE_LOADING](state) {
      state.loading = !state.loading
    },
    [types.SHOW_FOOTER](state) {
      state.showFooter = !state.showFooter
    },

  },
  actions: {
    saveAccssToken({ commit }, code) {
      commit(types.SAVE_ACCESSTOKEN, code)
    },
    login({ commit }, user) {
      commit(types.SAVE_USER, user)
    },
    changeLoading({ commit }) {
      commit(types.CHANGE_LOADING)
    },
    showFooter({ commit }) {
      commit(types.SHOW_FOOTER)
    },

  }

})
