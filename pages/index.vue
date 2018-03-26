<template>
  <div class="intro-content">
    <intro></intro>
  </div>
</template>

<script>
import Intro from '~/components/intro'

export default {
  data () {
    return {
      introPage: 1
    }
  },
  computed : {
    height () {
      return window.innerHeight
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {
    Intro
  }
}
</script>

<style>
.intro-content{
  padding: 60px 0px 0px 60px;
  width: 100%;
  height: 100%;
}
</style>
