<template>
<div class="left-bar-con" >
  <div class="left-bar">
    <img  v-if="user" class="profileImg" src="~~/assets/img/12-30-2.jpg">
    <!-- <button v-else id="show-modal" @click="$emit('showLoginModal')">LOGIN</button> -->
    <div class="my-page-title">
        <h5>My PAGE</h5>
    </div>
    <div class="bg-info">
      <div class="bg-name">
        <p>&#169;BrokenGlassesCorp.</p>
      </div>
      <div class="bg-sns">
        <i class="material-icons md-18 darkcyan">email</i>
        <i class="fa fa-instagram  md-18 darkcyan"></i>
        <i class="fa fa-facebook-square md-18 darkcyan"></i>
        <i class="fa fa-twitter md-18 darkcyan"></i>
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
  width: 80px;
  display: flex;
  align-items: center;
  /* height: 1200px; */
  background-color: lightblue;
  top: 0;
  left: 0;
  transition : width 0.4s ease-in-out;
}
.left-bar-con:hover{
  width:200px;
  transition : width 0.4s ease-in-out;
}
.left-bar-con.modal{
  z-index: 4;
}
.left-bar {
  padding: 80px 0px 20px 0px;
  display: flex;
  flex-direction: column;
  width: 80px;
  max-height: 800px;
  height: 100vh;
  background-color: lightblue;
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
  color: darkcyan;
  -ms-transform: rotate(-90deg); /* IE 9 */
  -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
  transform: rotate(-90deg);
}
.bg-info{
  text-align : center;
  display: flex;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
}
.bg-info .bg-name {
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.bg-info .bg-name p {
  color: darkcyan;
  padding-bottom:30px;
  font-size: 5px;
  -ms-transform: rotate(-90deg); /* IE 9 */
  -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
  transform: rotate(-90deg);
}
.bg-info .bg-sns {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.bg-info .bg-sns i {
  margin-bottom: 7px;
  flex-grow: 1 0;
}
.fa.material-icons.md-18 { font-size: 18px; }
.fa.darkcyan { color: darkcyan; }
.material-icons.md-18 { font-size: 18px; }
.material-icons.darkcyan { color: darkcyan; }
</style>
