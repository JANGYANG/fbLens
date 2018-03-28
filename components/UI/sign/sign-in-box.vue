<template>
  <div class="sign-box">
    <h1>Let's Football Lens!</h1>
    <input-field color="#FFFF" class="login-form" label="email" v-model="userSignIn.email"></input-field>
    <input-field color="#FFFF" type="password" class="login-form" label="password" v-model="userSignIn.password"></input-field>
    <div class="rememberme">
      <check-box label="Remember Me!" v-model="checked"></check-box>
    </div>
    <div class="sns-signin-con">
      <div class="sns-signin-box" id="naver-signin">
        
      </div>
      <div class="sns-signin-box" id="facebook-signin">
        
      </div>
      <div class="sns-signin-box" id="kakao-signin" @click="tst">
        
      </div>
    </div>
    <button class="sign-btn" @click="signIn()">Sign In</button>
    {{checked}}
  </div>
</template>

<script>
import inputField from "~/components/UI/form/input-field.vue"
import checkBox from "@/components/UI/form/check-box"

export default {
  data () {
    return {
      userSignIn : {},
      checked: false
    }
  },
  methods : {
    signIn () {
      // this.$emit('signIn',this.userSignIn)
      console.log(this.$store)

      this.$store.commit('loading', true)
      // this.$emit('signIn', this.userSignIn)
    },
    tst () {
      this.$store.state.localStorage.jwt = this.userSignIn.email
      this.$store.state.sessionStorage.jwt = this.userSignIn.email
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
  width:90%;
  height: 35px;
  margin-top: 10px;
  padding: 10px 0px;
  outline: none;
  cursor: pointer;
}
.rememberme{
  margin-left: 20px;
  width:100%;
  display:flex;
  justify-content: flex-start;
}
.sns-signin-con{
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
}
.sns-signin-box{
  flex-grow: 1;
  margin: 0px 5px;
  background: none;
  border: 1px solid white;
}
</style>
