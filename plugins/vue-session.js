import Vue from 'vue'
import VueSession from 'vue-session'
import store from '~/store/'


Vue.use(VueSession)

const vueSession = new VueSession({
})


export default vueSession