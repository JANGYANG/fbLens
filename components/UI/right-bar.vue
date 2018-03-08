<template>
<nav class="right-side-con">
  <sign-con :resultBar="resultBar" v-show="!$store.state.login"></sign-con>

 
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
import signCon from '~/components/UI/sign/sign-con.vue'

export default {
  data () {
    return {
      resultBar: false
    }
  },
  components:{
    signCon
  },
  methods: {
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
</style>
