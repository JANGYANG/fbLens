<template>
  <div class="container" ref="intro">


    
  <nav style="position:fixed;top:100px;left:100px;">
    <a href="#page-1">1</a>
    <a href="#page-2">2</a>
    <a href="#page-3">3</a>
  </nav>
  <scroll-container>
    <scroll-page id="page-1">
      <div class="intro-cotent" id="intro-1" style="color:white;" ref="intro1">
        <p>1풋볼 렌즈</p>
        <br/>
        <button @click="testR()">test</button>
        <button @click="signOut()">signOut</button>
        우리는 아마추어 축구팀들에게 
        <br/>
        지금까지와는 다른 
        <br/>
        새롭고 발전된 
        <br/>
        경기환경을 제공합니다.
      </div>
    </scroll-page>
    <scroll-page id="page-2">2</scroll-page>
    <scroll-page id="page-3">3</scroll-page>
  </scroll-container>
  </div>
</template>

<script>
export default {
  mounted () {

    let mySwiper = new Swiper('.swiper-container')
  },
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
  components: {
    AppLogo
  },
  methods: {
    test(){
      window.scroll(0,this.introPage*this.height)
      this.introPage++
      console.log(this.$refs.intro1)
    },
    testR(){
      this.$store.commit('setup',{userUID: '1', teamUID: '2'})
    },
    signOut(){
      this.$store.commit('signOut')
    }
  }
}
</script>

<style>
.container {
  padding: 0px 0px 0px 62px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
}
.intro-cotent{
  position:relative;
  width:100%;
  height:100vh;
  margin: 80px 62px 0px 360px;
}

scroll-container {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
scroll-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
