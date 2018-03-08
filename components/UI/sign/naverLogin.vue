<template>
  <div id="naverIdLogin"><a id="naverIdLogin_loginButton" href="#" role="button">naverComponentTest</a>
  </div>
</template>

<script>
export default {
  computed: {
    naverApi : {
      get () {
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
        return naverLogin
      },
      set () {

      }
    }
  },
  mounted () {
    window.addEventListener('load', function () {
			naverApi.getLoginStatus(function (status) {
				if (status) {
					/* (6) 로그인 상태가 "true" 인 경우 로그인 버튼을 없애고 사용자 정보를 출력합니다. */
					setLoginStatus()
				}
			})
		})
  },
  methods : {
    setLoginStatus () {
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
  }
}
</script>

<style>

</style>
