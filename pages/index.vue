<template>
  <div class="home-con">
    <div v-if="signIn" class="home-content">
      <home-main></home-main>
    </div>
    <div v-else class="intro-content">
      <home-intro></home-intro>
    </div>
  </div>
</template>

<script>
import homeIntro from '~/components/home/home-intro'
import homeMain from '~/components/home/home-main'
export default {
  data () {
    return {
      introPage: 1
    }
  },
  computed : {
    height () {
      return window.innerHeight
    },
    signIn () {
      return this.$store.getters['sessionStorage/jwt']
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {
    homeIntro,
    homeMain
  }
}
</script>

<style>
.home-con{
  padding: 60px 0px 0px 60px;
  width: 100%;
  height: 100%;
}
.intro-content{
  width: 100%;
  height: 100%;
}
.home-content{
  width:100%;
  height:100%;
}
</style>
