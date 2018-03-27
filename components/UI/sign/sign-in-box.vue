<template>
  <div class="sign-box">
    <h1>Let's Football Lens!</h1>
    <input-field color="#FFFF" class="login-form" label="email" v-model="userSignIn.email"></input-field>
    <input-field color="#FFFF" type="password" class="login-form" label="password" v-model="userSignIn.password"></input-field>
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
      // this.$emit('signIn',this.userSignIn)
      console.log(this.$store)

      this.$store.commit('loading', true)
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
</style>
