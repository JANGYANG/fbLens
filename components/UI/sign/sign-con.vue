<template>
  <div :class="{activate: !resultBar}" class="sign-con">
    <div class="sign-select-con">
      <div class="sign-select-box">
        <div>
          <button :class="{active: signInSgn}" @click="signInSgn = true">Sign in</button>
        </div>
        <div>
          <button :class="{active: !signInSgn}" @click="signInSgn = false">Sign up</button>
        </div>
      </div>
      <div class="nav-underline" :class="{active: !signInSgn}"></div>
    </div>


    <sign-in-box v-if="signInSgn"></sign-in-box>
    <sign-up-box v-else v-on:changeBox="signInSgn = !signInSgn"></sign-up-box>

  </div>
  
</template>

<script>
import signInBox from "~/components/UI/sign/sign-in-box.vue"
import signUpBox from "~/components/UI/sign/sign-up-box.vue"

export default {
  data () {
    return {
      signInSgn : true,
      // resultBar : false
    }
  },
  props: {
    resultBar : {
      type: Boolean,
      default (){
        return false
      }
    }
  },
  components : {
    signInBox,
    signUpBox
  }
}
</script>

<style>
.sign-con{
  transform: scale(1, 0);
  transform-origin: 1 0;
  height: 0%;
  transition: all .3s ease-in-out;
  padding: 0px 10px;
}
.sign-con.activate{
  border-left: #FFFF 1px solid;
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
  width: 100%;
  padding: 0px 0px;
}
.sign-select-box{
  display: flex;
  width: 100%;
}
.sign-select-box > div{
  flex-grow: 1;
  right: -50px
}
.sign-select-box > div > button{
  padding: 0px;
  width: 100%;
  height: 3em;
  background-color: inherit;
  color: white;
  opacity: 0.5;
  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;
}
.sign-select-box > div > button.active{
  opacity: 1;
}
.nav-underline {
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 50%;
  height: 1px;
  background: #FFFF;
  transition: all .3s ease-in-out;
}
.nav-underline.active {
  left: 50%;
}
</style>
