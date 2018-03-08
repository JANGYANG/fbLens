<template>
  <div class="container">
    <div>
      <h1>Main</h1>
    </div>
    <div>
      <p>{{$store.state.userUID}}</p>
    </div>
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
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
