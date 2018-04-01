<template>
<div class="left-bar-con" >
  <div class="left-bar">
    <div class="profile-con" v-if="$store.getters['sessionStorage/jwt']">
      <img class="profileImg" src="~~/assets/img/12-30-2.jpg">
      <button class="btn" @click="signOut()">SignOut</button>
    </div>
    <div v-else>
      <img  src="/mypage.svg" style="width:15px;">
    </div>
    <!-- <button v-else id="show-modal" @click="$emit('showLoginModal')">LOGIN</button> -->
    <div class="my-page-title">
        <h5>My PAGE</h5>
    </div>
    <div class="bg-info">
      <div class="bg-name">
        <p>&#169;BrokenGlassesCorp.</p>
      </div>
      <div class="bg-sns">
        <img  src="/mail.svg"/><br>
        <img  src="/instagram.svg"/><br>
        <img  src="/facebook.svg"/>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import InputField from '~/components/UI/form/input-field.vue'
// import Modal from '~/components/UI/modal.vue'
export default {
  data () {
    return {
      showModal: false,
      userLog: {
        email: '',
        password: ''
      },
      loading: false,
    }
  },
  mounted () {
    this.$on('loading', (loading) => {
      console.log("taking modal : " + loading)
      this.loading = loading
    })
  },
  computed: {
  },
  methods: {
    login(userLog) {
      this.$emit('loading', true)
      console.log(userLog)
      // axios.post("http://www.fblens.com/api/UserLoginServlet", JSON.stringify(userLog))
      axios.post("http://localhost:8080/Login", JSON.stringify(userLog))
      .then((res) => {
        console.log("moethods this : " + this)
        console.log(this)
        // this.$refs['modal'].$emit('modalChange', false)
        this.$refs['modal'].$emit('modalChange', false)
        this.$emit('loading', false)
        alert(res.data.userName + "님 환영합니다!")
        this.userUID = res.data.userUID
        this.$store.commit('setup', {userUID: this.userUID, teamUID: res.data.teamUID})
        console.log(res.data)
      })
    },
    signOut (){
      console.log(this.$store.dispatch)
      // this.$store.dispatch('sessionStorage/signOut')
      this.$store.commit('localStorage/signIn', {jwt: ''})
      this.$store.commit('sessionStorage/signIn', {jwt: ''})
    }
  },
  components : {
    // Modal,
    InputField
  },
}
</script>

<style>
.left-bar-con{
  position: fixed;
  z-index: 2;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  
  background-color: #E4F1FD;
  top: 0;
  left: 0;
  transition : width 0.4s ease-in-out;
}
.left-bar-con:hover{
  width: 195px;
  transition : width 0.4s ease-in-out;
}
.left-bar-con.modal{
  z-index: 4;
}
.left-bar {
  padding: 62px 0px 0px 0px;
  height: 100%;
  position: relative;
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E4F1FD;
}
.profile-con{
  display: flex;
  flex-direction: column;
}
.profileImg {
  width: 100%;
  opacity: 0.5;
}
.profile-con .btn{
  margin-top: 10px;
  color: #297FC9;
  background: none;
  border-radius: 0;
  border: 1px solid #297FC9;
}
.my-page-title {
  flex-grow: 3;
  width: 100%;
  position: relative;
}
.my-page-title h5{
  position: absolute;
  font-weight: 100;
  bottom: 50%;
  color: #297FC9;
  -ms-transform: rotate(-90deg); /* IE 9 */
  -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
  transform: rotate(-90deg);
}
.bg-info{
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  width: 100%;
  flex-direction: column;
}
.bg-info .bg-name {
  flex-grow: 1;
  position: relative;
}
.bg-info .bg-name p {
  position: absolute;
  left: -29px;
  bottom: 80px;
  color: #989898;
  font-size: 12px;
  -ms-transform: rotate(-90deg); /* IE 9 */
  -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
  transform: rotate(-90deg);
}
.bg-info .bg-sns {
  min-height: 64px;
  padding-bottom: 30px;
}
.bg-info .bg-sns img{
  left: 23px;
  position:absolute;
  width: 12px;
}
</style>
