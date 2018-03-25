<template>
<nav class="right-side-con">
  <sign-con :resultBar="resultBar" v-show="!$store.state.login"></sign-con>

 
  <div class="pop-up-con" @click="resultBar = !resultBar">
    <div class="pop-up-btn">
    <img src="/up.svg" style="width:18px" class="result-icon">
    RESULT
    </div>
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
  z-index:5;
  right: 0px;
  width: 240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.pop-up-con {
  width: 100%;
  background: #E4F1FD;
  display: flex;
  justify-content: center;
  height: 64px;
  min-height: 64px;
  max-height: 64px;
  cursor: pointer;
  color: #297FC9;
}
.pop-up-con .pop-up-btn{
  width: 90%;
  height: 100%;
  border-bottom: 2px solid #297FC9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 100;
  color: #297FC9;
}
.right-side-con .result-con {
  transform: scale(0, 1);
  transform-origin: 0 1;
  width: 100%;
  height: 0;
  background: #E4F1FD;
  transition: height 2s;
}
.right-side-con .result-con.activate {
  height: 100%;
  transition: height 2s;
  transform: scale(1, 1);
}
.result-icon{
  width: 18px;
  position: absolute;
  left: 15px;
}
</style>
