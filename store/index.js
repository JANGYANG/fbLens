import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    login: false,
    userUID: '',
    teamUID: ''
  },
  mutations: {
    setup (state, user) {
      console.log(user.teamUID)
      state.userUID = user.userUID
      state.teamUID = user.teamUID
      state.login = true
    },
    signUp (state, user) {

    }
  }
})

export default store