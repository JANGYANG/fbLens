import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-persist'

Vue.use(Vuex)

export default () => new Vuex.Store({
  state: {
    user: {
      login: false,
      userUID: '',
      teamUID: ''
    },
    loading: false
  },
  mutations: {
    setup (state, user) {
      console.log(user.teamUID)
      state.user.userUID = user.userUID
      state.user.teamUID = user.teamUID
      state.user.login = true
    },
    signUp (state, user) {

    },
    signOut (state) {
      state.user.login = false
      state.user.userUID = ''
      state.user.teamUID = ''
    },
    loading (state, loadingState) {
      state.loading = loadingState
    }
  },
  getters: {
    loading: (state) => {
      return state.loading
    }
  },
  plugins: [
    new persist({
      storage: window.localStorage,
      key: 'state'
    }).plugin
  ]
})