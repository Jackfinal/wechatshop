import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: localStorage.getItem('accessToken') || '',
    user: localStorage.getItem('user') || '',
    loading: false,
    showFooter: true,

  },
  mutations: {
    saveAccssToken(state, code) {
      localStorage.setItem('accessToken', code)
      state.accessToken = code
    },
    saveUser(state, user) {
      localStorage.setItem('user', JSON.stringify(user))
      state.user = user
    },
    changeLoading(state) {
      state.loading = !state.loading
    },
    showFooter(state) {
      state.showFooter = !state.showFooter
    },

  },
  actions: {
    saveAccssToken({ commit }, code) {
      commit(saveAccssToken, code)
    },
    login({ commit }, user) {
      commit(saveUser, user)
    },
    changeLoading({ commit }) {
      commit(changeLoading)
    },
    showFooter({ commit }) {
      commit(showFooter)
    }

  }

})
