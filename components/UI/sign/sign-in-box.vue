<template>
  <div class="sign-box">
    <h1 style="font-weight:100;">Let's Football Lens!</h1>
    <input-field class="login-form" label="email" v-model="userSignIn.email"></input-field>
    <input-field type="password" class="login-form" label="password" v-model="userSignIn.password"></input-field>
    <button class="sign-btn" @click="signIn()">Sign In</button>
  </div>
</template>

<script>
import inputField from "~/components/UI/form/input-field.vue"
export default {
  data () {
    return {
      userSignIn : {},
    }
  },
  methods : {
    signIn () {
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
  justify-content: center;
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
