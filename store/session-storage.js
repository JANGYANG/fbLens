const sessionStorage = {
    namespaced: true,
    state : {
        jwt : '',
        user : {
            userUID : '',
            teamUID : ''
        }
    },
    mutations : {
        signIn (state, obj) {
            state.jwt = obj.jwt
            state.user.userUID = obj.userUID
            state.user.teamUID = obj.teamUID
        }
    }
}

export default sessionStorage;