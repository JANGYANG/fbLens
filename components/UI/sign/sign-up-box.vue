<template>
   <div class="sign-box">
    <h1 style="font-weight:100;">Join Football Lens!</h1>
    <input-field color="white" label="email" v-model="userSignUp.email"></input-field>
    <input-field color="white" type="password" label="password" v-model="userSignUp.password"></input-field>
    <input-field :color="checkPw ? 'white' : 'red'" type="password" label="password_confirm" v-model="passwordConfirm"></input-field>
    <input-field color="white" label="name" v-model="userSignUp.userName"></input-field>
    <input-field color="white" label="phone_number" v-model="userSignUp.phoneNum"></input-field>
    <button class="sign-btn" @click="signUp(userSignUp)">Sign UP</button>
  </div>
</template>

<script>
import inputField from "~/components/UI/form/input-field.vue"
import axios from "axios"
export default {
  data () {
    return {
      userSignUp: {},
      passwordConfirm: ''
    }
  },
  computed : {
    checkPw () {
      if (this.userSignUp.password == this.passwordConfirm) {
        return true
      }else {
        return false
      }
    },
    checkForm() {
      let form = false
      if ( this.userSignUp.email && this.userSignUp.password && this.userSignUp.userName && this.userSignUp.phoneNum ){
        if (this.checkPw) {
          form = true
        }
      }
      return form
    }
  },
  methods : {
    signUp (userSignUp) {
      if (this.checkForm){
        this.$store.commit('loading', true)
        console.log(userSignUp)
        // axios.post("http://www.fblens.com/api/UserLoginServlet", JSON.stringify(userSignUp))
        axios.post("http://localhost:8080/api/SignUpUser", JSON.stringify(userSignUp))
        .then((res) => {
          this.userSignUp = ''
          this.passwordConfirm = ''
          this.$store.commit('loading', false)
          this.$emit('changeBox')
          alert("SignUp Success")
        })
      }else {
        alert("check your form")
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
  background: inherit;
  color: white;
  border: 1px solid #FFFF;
  margin-top: 20px;
  padding: 10px 0px;
  outline: none;
  cursor: pointer;
}
.sign-box .check{
  color: red;
}
</style>
