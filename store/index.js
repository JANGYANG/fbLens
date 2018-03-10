import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    user: {login: false,
    userUID: '',
    teamUID: ''},
    loading: false
  },
  mutations: {
    setup (state, user) {
      console.log(user.teamUID)
      state.userUID = user.userUID
      state.teamUID = user.teamUID
      state.login = true
    },
    signUp (state, user) {

    },
    loading (state, loadingState) {
      state.loading = loadingState
    }
  },
  getters: {
    loading: (state) => {
      return state.loading
    }
  }
})

export default store