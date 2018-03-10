<template>
   <div class="sign-box">
    <h1 style="font-weight:100;">Join Football Lens!</h1>
    <input-field label="email" v-model="userSignUp.email"></input-field>
    <input-field type="password" label="password" v-model="userSignUp.password"></input-field>
    <input-field type="password" label="password_confirm" :class="{check: checkPw(userSignUp.password, passwordConfirm)}" v-model="passwordConfirm"></input-field>
    <input-field label="name" v-model="userSignUp.userName"></input-field>
    <input-field label="phone_number" v-model="userSignUp.phoneNum"></input-field>
    <button class="sign-btn" @click="signUp()">Sign UP</button>
    {{userSignUp}}
  </div>
</template>

<script>
import inputField from "~/components/UI/form/input-field.vue"

export default {
  data () {
    return {
      userSignUp: {},
      passwordConfirm: ''
    }
  },
  methods : {
    checkForm () {
      if (this.checkPw(this.userSignUp.password == this.passwordConfirm)){
        return true
      }else {
        return false
      }
    },
    signUp () {
      console.log(this.checkPw())
      if (this.checkForm()){

      }else {
        alert("check your form")
      }
    },
    checkPw(password, passwordConfirm) {
      if (password == passwordConfirm) {
        return false
      }else {
        return true
      }
    }
  },
  components : {
    inputField
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
}
.sign-btn{
  background: teal;
  width:90%;
  margin-top: 10px;
  padding: 10px 0px;
  outline: none;
  border: none;
  cursor: pointer;
}
.sign-box .check{
  color: red;
}
</style>
