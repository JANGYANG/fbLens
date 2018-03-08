<template>
<nav class="right-side-con">
  <div v-show="!$store.state.login" :class="{activate: !resultBar}" class="sign-con">
    <div class="sign-select-con">
    
      <div class="sign-select-box">
        <div class="sign-in-btn" :class="{active: signInSgn}">
          <button  @click="signInSgn = true">sign in</button>
        </div>
        <div class="sign-up-btn" :class="{active: !signInSgn}">
          <button  @click="signInSgn = false">sign up</button>
        </div>
      </div>
      <div class="nav-underline" :class="{active: !signInSgn}"></div>
    </div>

    <div class="sign-box" v-if="signInSgn">
      <h1 style="font-weight:100;">Let's Football Lens!</h1>
      <input-field class="login-form" label="email" v-model="userSignIn.email"></input-field>
      <input-field type="password" class="login-form" label="password" v-model="userSignIn.password"></input-field>
    </div>
    
    <div class="sign-box" v-else>
      <h1 style="font-weight:100;">Join Football Lens!</h1>
      <input-field class="login-form" label="email" v-model="userSignUp.email"></input-field>
      <input-field class="login-form" type="password" label="password" v-model="userSignUp.password"></input-field>
      <input-field class="login-form" type="password" label="password_confirm" v-model="passwordConfirm"></input-field>
      <input-field class="login-form" label="name" v-model="userSignUp.userName"></input-field>
      <input-field class="login-form" label="phone_number" v-model="userSignUp.phoneNum"></input-field>
    </div>

    <button class="sign-btn" @click="signInSgn ? signIn() : signUp(userSignUp)">Sign {{signInSgn ? 'In' : 'Up'}}</button>
    <a id="kakao-login-btn"></a>
    <a href="http://developers.kakao.com/logout"></a>
    <div id="naverIdLogin"><a id="naverIdLogin_loginButton" href="#" role="button">asdf</a></div>
    <a id="gnbLogin">Login</a>
  </div>

  <div class="pop-up-btn" @click="resultBar = !resultBar">

    <i class="fa md-18 darkcyan" :class="iconClass()" ></i>
    <h1>Result</h1>
    <i class="fa md-18 darkcyan" :class="iconClass()"></i>
  </div>
  <div class="result-con" :class="{activate: resultBar}">
    ResultList
  </div>
</nav>  
</template>

<script>
import inputField from '~/components/UI/form/input-field.vue'

export default {
  data () {
    return {
      signInSgn: true,
      resultBar: false,
      userSignIn : {
        email: '',
        password: ''
      },
      userSignUp : {
        email: '',
        password: '',
        userName: '',
        phoneNum: ''
      },
      passwordConfirm: ''
    }
  },
  components:{
    inputField
  },
  mounted () {
    this.$on('logSucess', () => {
      console.log(this)
      this.resultBar = true
    })
    this.$on('signUpSucess', () => {
      console.log(this)
      this.userSignUp.email = ''
      this.userSignUp.password = ''
      this.passwordConfirm = ''
      this.userSignUp.userName = ''
      this.userSignUp.phoneNum = ''
      this.signInSgn = true
    })
    Kakao.init('fe6e163066bb3f5de8ab8eb5f7d82b63')
    // 카카오 로그인 버튼을 생성합니다.
    Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: function(authObj) {
        Kakao.API.request({
          url: '/v1/user/me',
          success: function(res) {
            alert(JSON.stringify(res))
            console.log(res)
            console.log(global)
            console.log($nuxt.$children[1].$refs['right-bar'].userSignUp)


            // this.userSignUp.email = res.kaccount_email
            // this.userSignUp.passwordConfirm = res.id
          },
          fail: function(error) {
            alert(JSON.stringify(error))
          }
        })
      },
      fail: function(err) {
          alert(JSON.stringify(err))
      }
    })

		var naverLogin = new naver.LoginWithNaverId(
			{
				clientId: "sB7lFniXFHqscMxH4Dfk",
				callbackUrl: "http://" + window.location.hostname + ((location.port==""||location.port==undefined)?"":":" + location.port) + "/naverCallback",
				isPopup: false,
				// loginButton: {color: "green", type: 1, height: 30}
			}
		)
		/* (4) 네아로 로그인 정보를 초기화하기 위하여 init을 호출 */
		naverLogin.init()
		
		/* (4-1) 임의의 링크를 설정해줄 필요가 있는 경우 */
		// $("#gnbLogin").attr("href", naverLogin.generateAuthorizeUrl())

		/* (5) 현재 로그인 상태를 확인 */
		window.addEventListener('load', function () {
			naverLogin.getLoginStatus(function (status) {
				if (status) {
					/* (6) 로그인 상태가 "true" 인 경우 로그인 버튼을 없애고 사용자 정보를 출력합니다. */
					setLoginStatus()
				}
			})
		})

		/* (6) 로그인 상태가 "true" 인 경우 로그인 버튼을 없애고 사용자 정보를 출력합니다. */
		function setLoginStatus() {
			var profileImage = naverLogin.user.getProfileImage()
      var nickName = naverLogin.user.getNickName()
      var name = naverLogin.user.getName()
			$("#naverIdLogin_loginButton").html('<br><br><img src="' + profileImage + '" height=50 /> <p>' + name + '님 반갑습니다.</p>')
			$("#gnbLogin").html("Logout")
			$("#gnbLogin").attr("href", "#")
			// /* (7) 로그아웃 버튼을 설정하고 동작을 정의합니다. */
			$("#gnbLogin").click(function () {
				naverLogin.logout()
				location.reload()
			})
		}
	
  },
  created () {
    
  },
  computed: {
  },
  methods: {
    loginComUp (val) {
      console.log(val)
      return setTimeout(function(val) {
        console.log("time")
        console.log(this.val)
        return !val
      }, 2000)
    },
    signUp (userSignUp) {
      this.$emit('signUp', userSignUp)
    },
    iconClass () {
      return this.resultBar ? 'fa-chevron-down' : 'fa-chevron-up'
    }
  }
}
</script>

<style>
.right-side-con {
  position: fixed;
  top: 0px;
  z-index:5;
  position: absolute;
  right: 0px;
  width: 240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.pop-up-btn {
  width: 100%;
  background: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  min-height: 80px;
  max-height: 80px;
  cursor: pointer;
}
.pop-up-btn h1, i {
  color: white;
}
.right-side-con .result-con {
  transform: scale(0, 1);
  transform-origin: 0 1;
  width: 100%;
  height: 0;
  background: lightcyan;
  transition: height 2s;
}
.right-side-con .result-con.activate {
  height: 100%;
  transition: height 2s;
  transform: scale(1, 1);
}
.right-side-con .sign-con{
  transform: scale(1, 0);
  transform-origin: 1 0;
  height: 0%;
  transition: all .3s ease-in-out;
}
.right-side-con .sign-con.activate{
  border-left: cyan 1px solid;
  margin-top: 100px;
  margin-bottom: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transform: scale(1, 1);
  transition-delay: all .3s ease-in-out;
}
.sign-select-con {
  position: relative;
  width: 90%;
  padding: 0px 0px;
}
.sign-con .sign-btn{
  background: teal;
  width:90%;
  margin-top: 10px;
  padding: 10px 0px;
  outline: none;
  border: none;
}
.sign-select-box{
  display: flex;
  width: 100%;
}
.sign-select-box > div{
  flex-grow: 1;
  right: -50px
}
/* .sign-select-box > div.active{
  flex-grow: 1;
  border-bottom: 1px solid gray;
  text-decoration: none;
  transition: 0.3s;
  transition-timing-function: all .3s ease-in-out;
} */
.sign-con .sign-box {
  margin-top: 50px;
}
.sign-select-box > div > button{
  padding: 0px;
  width: 100%;
  height: 3em;
  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;
}
.nav-underline {
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 50%;
  height: 1px;
  background: #333;
  transition: all .3s ease-in-out;
}
.nav-underline.active {
  left: 50%;
}
</style>
