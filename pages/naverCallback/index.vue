<template>
  <div>
    <h1>naverLogin</h1>
  </div>
</template>

<script>
export default {
  mounted () {
    var naverLogin = new naver.LoginWithNaverId(
			{
				clientId: "{sB7lFniXFHqscMxH4Dfk}",
				callbackUrl: "{http://localhost:3000/naverCallback}",
				isPopup: false,
				callbackHandle: true
				/* callback 페이지가 분리되었을 경우에 callback 페이지에서는 callback처리를 해줄수 있도록 설정합니다. */
			}
		)

		naverLogin.init()

		/* (4) Callback의 처리. 정상적으로 Callback 처리가 완료될 경우 main page로 redirect(또는 Popup close) */
		window.addEventListener('load', function () {
		  naverLogin.getLoginStatus(function (status) {
				if (status) {
            var email = naverLogin.user.getEmail();
            if( email == undefined || email == null) {
						alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.")
						/* (5-1) 사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함 */
						naverLogin.reprompt()
						return
					}

					window.location.replace("http://" + window.location.hostname + ( (location.port==""||location.port==undefined)?"":":" + location.port))
				} else {
					console.log("callback 처리에 실패하였습니다.")
				}
			})
		})
  }
}
</script>

<style>

</style>
