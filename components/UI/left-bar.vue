<template>
<div class="left-bar-con" >
  <div class="left-bar">
    <img  v-if="user" class="profileImg" src="~~/assets/img/12-30-2.jpg">
    <img v-else src="/mypage.svg" style="width:15px;">
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
    user () {
      return this.$store.state.login
    }
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
  position: relative;
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 800px;
  height: 100vh;
  background-color: #E4F1FD;
}
.profileImg {
  width: 80px;
  height: 80px;
  opacity: 0.5;
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
  left: -20.5px;
  bottom: 80px;
  color: #989898;
  font-size: 5px;
  -ms-transform: rotate(-90deg); /* IE 9 */
  -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
  transform: rotate(-90deg);
}
.bg-info .bg-sns {
  min-height: 64px;
  position: relative;
}
.bg-info .bg-sns img{
  left: 23px;
  position:absolute;
  width: 12px;
}
</style>
