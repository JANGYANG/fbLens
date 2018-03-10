<template>
  <div class="container">
    <div class="intro-cotent" style="color:white;">
      풋볼 렌즈
      <br/>
      <br/>
      우리는 아마추어 축구팀들에게 
      지금까지와는 다른 
      새롭고 발전된 
      경기환경을 제공합니다.
    </div>
    <!--<div>-->
    <!--  <p>{{$store.state.userUID}}</p>-->
    <!--</div>-->
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
// import EventBus from '~/components/event-bus.vue'
import Bus from '~/assets/bus'

export default {
  data () {
    return {
    }
  },
  components: {
    AppLogo
  },
  methods: {
  }
}
</script>

<style>
.container {
  padding: 62px 0px 0px 62px;
  display: flex;
  height: 100vh;
  width: 100vh;
  min-height: 100vh;
  min-width: 100vw;
}
.intro-cotent{
  margin: 58px 0px 0px 323px;
}
</style>
