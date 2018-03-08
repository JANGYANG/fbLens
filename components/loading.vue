<template lang="html">
  <div class="loading-page" v-if="loading||value">
    <p>로딩중...</p>
  </div>
</template>

<script>
export default {
  props: {
    value: {type: Boolean, default () { return false }}
  },
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  animation: turn 2s linear forwards 1s;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}
</style>