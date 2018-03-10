<template>
  <div>
    <loading v-model="loading"></loading>
    <modal v-if="showLoginModal" @close="showLoginModal = false" @login="login(userLog)">
      <h3 slot="header">FootBall Lens </h3>
      <input-field style="padding:0px 2px;" label="email" slot="body" v-model="userLog.email"></input-field>
      <input-field style="padding:0px 2px;" label="password" slot="body" v-model="userLog.password"></input-field>
    </modal>
    <div class="flLogo">
      <h1>FootBall LENS</h1></div>
    <upper-bar/>
    <left-bar @showLoginModal="showLoginModal = true"/>

    {{userLog.email}}
    {{userLog.password}}
    <right-bar ref="right-bar" @signIn="login" @signUp="signUp"></right-bar>
    <nuxt class="contentBox" :userLog="userLog" :userUID="userUID"/>
    
      <!-- <modal ref="modal">
        <div>
          <input-field v-model="userLog.email"></input-field>
          <input-field v-model="userLog.password"></input-field>
          <button @click="login(userLog)">losgin</button>
        </div>
      </modal> -->
  </div>
</template>
<script>
import upperBar from "~/components/UI/upper-bar.vue"
import axios from 'axios'
import Loading from '~/components/loading'
import InputField from '~/components/UI/form/input-field.vue'
import leftBar from "~/components/UI/left-bar.vue"
import Modal from "~/components/UI/modal.vue"
import rightBar from '~/components/UI/right-bar.vue'

export default {
  data () {
    return {
      get globe(){
        return "globe"
      },
      showLoginModal: false,
      userLog: {email: '', password: ''},
      userUID: ''
    }
  },
  computed: {
    loading: {
      get () {
        return this.$store.getters.loading
      }
    }
  },
  mounted () {
  },
  components : {
    upperBar,
    leftBar,
    Loading,
    InputField,
    Modal,
    rightBar
  },
  methods: {
    login(userLog) {
      this.loading = true
      console.log(userLog)
      // axios.post("http://www.fblens.com/api/UserLoginServlet", JSON.stringify(userLog))
      axios.post("http://www.fblens.com/api/Login", JSON.stringify(userLog))
      .then((res) => {
        console.log("moethods this : " + this)
        console.log(this)
        // this.$refs['modal'].$emit('modalChange', false)
        // this.$refs['modal'].$emit('modalChange', false)
        this.showLoginModal = false
        this.loading = false
        alert(res.data.userName + "님 환영합니다!")
        this.$refs['right-bar'].$emit('logSucess')
        this.userUID = res.data.userUID
        this.$store.commit('setup', {userUID: this.userUID, teamUID: res.data.teamUID})
        console.log(res.data)
      })
    },
    signUp(userSignUp) {
      this.loading = true
      console.log(userSignUp)
      // axios.post("http://www.fblens.com/api/UserLoginServlet", JSON.stringify(userSignUp))
      axios.post("/api/RegisterUser", JSON.stringify(userSignUp))
      .then((res) => {
        console.log("moethods this : " + this)
        console.log(this)
        // this.$refs['modal'].$emit('modalChange', false)
        // this.$refs['modal'].$emit('modalChange', false)
        this.showLoginModal = false
        this.loading = false
        this.$refs['right-bar'].$emit('signUpSucess')
        console.log(res.data)
      })
    }
  }
}
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
  background: linear-gradient(to bottom right, #297FC9, #295AC9);;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.contentBox{
  display: block;
  position: absolute;
  z-index: 1;
  /*margin: auto;*/
  /*padding-top: 80px;*/
  /*margin-left: 80px;*/
  /*margin-right: 80px;*/
}
.flLogo {
  z-index: 4;
  position: absolute;
  display: flex;
  
  align-items: center;
  margin: 0 0 0 0;
  padding-left: 23px;
  width: 195px;
  height: 62px;
  background-color: #E4F1FD;
}
.flLogo h1{
  color: #297FC9;
  font-size: 20px;
}
</style>
