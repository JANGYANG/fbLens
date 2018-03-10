<template>
  <div class="sign-box">
    <h1 style="font-weight:100;">Let's Football Lens!</h1>
    <input-field class="login-form" label="email" v-model="userSignIn.email"></input-field>
    <input-field type="password" class="login-form" label="password" v-model="userSignIn.password"></input-field>
    <button class="sign-btn" @click="signIn()">Sign In</button>
    <button class="sign-btn" @click="sessionTest()">session</button>
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
    },
    sessionTest () {
      this.$session.start()
      this.$session.set('test','yoho')
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
</style>
