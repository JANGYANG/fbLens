<template>
   <div class="sign-box">
    <h1 style="font-weight:100;">Join Football Lens!</h1>
    <input-field class="login-form" label="email" v-model="userSignUp.email"></input-field>
    <input-field class="login-form" type="password" label="password" v-model="userSignUp.password"></input-field>
    <input-field class="login-form" type="password" label="password_confirm" v-model="passwordConfirm"></input-field>
    <input-field class="login-form" label="name" v-model="userSignUp.userName"></input-field>
    <input-field class="login-form" label="phone_number" v-model="userSignUp.phoneNum"></input-field>
    <button class="sign-btn" @click="signUp(userSignUp)">Sign UP</button>
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
    signUp () {
      // this.$emit('signIn', this.userSignIn)
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
}
</style>
