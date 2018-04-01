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
        },
        setJwt (state, jwt) {
            state.jwt = jwt
        }
    },
    actions : {
        signOut ({state, commit, rootState}) {
 
        }
    },
    getters: {
        jwt (state, getters, rootState) {
            if (rootState.localStorage.jwt){
                state.jwt = rootState.localStorage.jwt
                return true
            }else if(state.jwt){
                return true
            }else{
                return false
            }
        }
    }
}

export default sessionStorage;