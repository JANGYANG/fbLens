import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-persist'
import localStorage from './local-storage'
import sessionStorage from './session-storage'

Vue.use(Vuex)

const vuexLocal = new persist({
  storage: window.localStorage,
  modules: ['localStorage'] //only save user module
})

const vuexSession = new persist({
  storage: window.sessionStorage,
  modules: ['sessionStorage'] //only save user module
})

export default () => new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    loading (state, loadingState) {
      state.loading = loadingState
    },
  },
  getters: {
    loading: (state) => {
      return state.loading
    }
  },
  modules: {
    localStorage,
    sessionStorage
  },
  plugins: [
    vuexLocal.plugin,
    vuexSession.plugin
  ]
})