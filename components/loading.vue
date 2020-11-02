<template lang="html">
  <div class="loading-page" v-if="loading||value">

    <div id="loading-anima"><p>로딩중...</p></div>

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

<style>
#loading-anima{
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 200px;
  height: 200px;
  background-color: coral;
  animation: square-to-circle 2s 1s infinite alternate;
}
.loading-page {
  position: fixed;
  display:flex;
  justify-content: center;
  align-items: center;
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
@keyframes square-to-circle {
  0%  {
    border-radius:0 0 0 0;
    background:coral;
    transform:rotate(0deg);
  }
  25%  {
    border-radius:50% 0 0 0;
    background:darksalmon;
    transform:rotate(45deg);
  }
  50%  {
    border-radius:50% 50% 0 0;
    background:indianred;
    transform:rotate(90deg);
  }
  75%  {
    border-radius:50% 50% 50% 0;
    background:lightcoral;
    transform:rotate(135deg);
  }
  100% {
    border-radius:50%;
    background:darksalmon;
    transform:rotate(180deg);
  }
}
</style>
