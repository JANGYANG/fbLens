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
        <img style="width:12px;" src="/mail.svg"/>
        <img style="width:12px;" src="/instagram.svg"/>
        <img style="width:12px;" src="/facebook.svg"/>
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
  width: 62px;
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
  padding: 80px 0px 20px 0px;
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
  flex-grow: 4;
  text-align: center;
  display:flex;
  flex-direction: column;
  justify-content: center;
}
.my-page-title h5{
  position: absolute;
  right: 3px;
  font-weight: 100;
  bottom: 50%;
  color: #297FC9;
  -ms-transform: rotate(-90deg); /* IE 9 */
  -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
  transform: rotate(-90deg);
}
.bg-info{
  text-align : center;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content:flex-end;
}
.bg-info .bg-name {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.bg-info .bg-name p {
  color: #989898;
  font-size: 5px;
  -ms-transform: rotate(-90deg); /* IE 9 */
  -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
  transform: rotate(-90deg);
}
.bg-info .bg-sns {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
}
.bg-info .bg-sns img{
  margin-top: 7px;
}
.fa.material-icons.md-18 { font-size: 18px; }
.fa.darkcyan { color: #297FC9; }
.material-icons.md-18 { font-size: 18px; }
.material-icons.darkcyan { color: #297FC9; }
</style>
