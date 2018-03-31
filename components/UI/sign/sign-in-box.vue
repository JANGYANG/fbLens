<template>
  <div class="sign-box">
    <h1>Let's Football Lens!</h1>
    <input-field color="#FFFF" class="login-form" label="email" v-model="userSignIn.email"></input-field>
    <input-field color="#FFFF" type="password" class="login-form" label="password" v-model="userSignIn.password"></input-field>
    <div class="option-con">
      <check-box label="Remember Me!" v-model="checked" color="#ccc"></check-box>
      <p>Forgot?</p>
    </div>
    <div class="sign-in-btn-con">
      <button class="sign-btn" @click="signIn(userSignIn)">Sign In</button>
      <p>Or SignIn with</p>
      <div class="sns-signin-con">
        <div class="sns-signin-box" id="naver-signin">
          
        </div>
        <div class="sns-signin-box" id="facebook-signin">
          
        </div>
        <div class="sns-signin-box" id="kakao-signin" @click="tst">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import inputField from "~/components/UI/form/input-field.vue"
import checkBox from "@/components/UI/form/check-box"
import axios from "axios"
export default {
  data () {
    return {
      userSignIn : {},
      checked: false
    }
  },
  methods : {
    // signIn () {
    //   // this.$emit('signIn',this.userSignIn)
    //   console.log(this.$store)
      
    //   this.$store.commit('loading', true)
    //   // this.$emit('signIn', this.userSignIn)
    // },
    signIn(userSignIn) {
      this.$store.commit('loading', true)
      console.log(userSignIn)
      // axios.post("http://www.fblens.com/api/UserLoginServlet", JSON.stringify(userSignIn))
      axios.post("http://localhost:8080/api/SignIn", JSON.stringify(userSignIn))
      .then((res) => {
        console.log("moethods this : " + this)
        console.log(this)
        // this.$refs['modal'].$emit('modalChange', false)
        // this.$refs['modal'].$emit('modalChange', false)
        this.$store.commit('loading', false)
        alert(res.data.userName + "님 환영합니다!")
        this.$store.commit('sessionStorage/signIn', res.data)
      })
    },
    tst () {
      // this.$store.state.localStorage.jwt = this.userSignIn.email
      // this.$store.state.sessionStorage.jwt = this.userSignIn.email
      // this.$store.commit('sessionStorage/signIn',{jwt: '1', userUID: '2', teamUID: '3'})
      // console.log(this.$store.commit())
    }
  },
  components : {
    inputField,
    checkBox
  }
}
</script>

<style>
.sign-box {
  width:100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sign-box h1{
  text-align: center;
  font-weight:100;
  color: white;
}
.sign-btn{
  background: inherit;
  border: 1px solid #FFFF;
  color: white;
  width:100%;
  height: 35px;
  margin-top: 30px;
  padding: 10px 0px;
  outline: none;
  cursor: pointer;
}
.option-con{
  width:100%;
  display:flex;
  justify-content: space-between;
}
.option-con p{
  font-size : 5px;
  color: #ccc
}
.sns-signin-con{
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
}
.sns-signin-box{
  flex-grow: 1;
  max-width: 30%;
  background: none;
  border: 1px solid white;
}
.sign-in-btn-con{
  width: 100%;
}
.sign-in-btn-con p{
  color: #ccc;
  margin: 10px 0px;
  font-size: 5px;
  text-align: center;

}
</style>
