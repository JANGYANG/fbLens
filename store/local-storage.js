const localStorage = {
    namespaced: true,
    state : {
        jwt : ''
    },
    mutations : {
        signIn (state, obj) {
            state.jwt = obj.jwt
        },
        signOut (state) {
            state.jwt = ''
        }
    }
}

export default localStorage;