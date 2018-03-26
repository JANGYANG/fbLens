<template>
<div class="intro-con">
  <div class="custom-swiper-nav">
    <div class="intro-line"></div>
    <h1>{{indexTag[swiperIndex]}}</h1>
  </div>
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <div class="slide-con">
          <div class="intro-image-con">
            <img class="intro-image" src="@/assets/img/stadium.jpg" alt="">
          </div>
          <div class="intro-text-con">
            <h1>풋볼 렌즈</h1>
            <p>우리는 아마추어 축구팀들에게</p>
            <p>지금까지와는 다른</p>
            <p>새롭고 발전된</p>
            <p>경기환경을 제공합니다.</p>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="slide-con">
          <div class="intro-image-con">
            <img class="intro-image" src="@/assets/img/intro2.jpg" alt="">
          </div>
          <div class="intro-text-con">
            <h1>매칭, 팀 관리 및 운영, 통계 서비스</h1>
            <p>원하는 스케줄과 장소를 입력하면,</p>
            <p>가장 적합한 팀들을 찾아줍니다.</p>
            <p><br/></p>
            <p>메시지, 알람, 자동기록 등의 기능으로</p>
            <p>더 이상 경기 진행과 팀 관리에</p>
            <p>어려움을 느끼지 않는 환경을 제공합니다.</p>
          </div>
        </div>
      </div>
      <div class="swiper-slide" style="background-color:red;">Slide 3</div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
  </div>
</div>
</template>

<script>
import Swiper from 'swiper'
export default {
  data () {
    return {
      swiperIndex: 0,
      indexTag : ['01','02','03']
    }
  },
  watch: {
    swiperIndex : function (val) {
      console.log(val)
    }
  },
  mounted () {
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      speed: 1000,
      mousewheel: true,
      loop: false,
      autoplay: {
        delay: 4000,
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        renderBullet: function(index, className) {
          return '<span class="' + className + '">' + '' + '</span>';
        }
      },
    })
    var swiperIndex = this.swiperIndex
    console.log(swiperIndex)
    var self = this
    mySwiper.on('slideChange', function () {
      console.log(this.activeIndex)
      self.swiperIndex = this.activeIndex
    })
  }
}
</script>

<style>
@import '@/node_modules/swiper/dist/css/swiper.min.css';
.intro-con{
  display:initial;
  position: relative;
}
.custom-swiper-nav{
  z-index: 1;
  position: absolute;
  left: 100px;
  top: 65px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro-line{
  margin-left: -5px;
  height: 200px;
  width: 2px;
  background-color: #FFFF;
}
.custom-swiper-nav>h1{
  margin-top: 20px;
  transform: rotate(90deg);
  color: white;
  font-size: 30px;
  font-weight: 100;
}
.swiper-container {
    z-index: 0;
    width: 100%;
    height: 100%;
}
.swiper-slide {
  height: 100%;
  width: 100%;
}
.slide-con{
  display: flex;
}
.intro-image-con{
  width: 365px;
  overflow: hidden;
}
.intro-image{
  opacity: 0.5;
  height: fill;
}
.intro-text-con{
  color: white;
  font-weight: 100;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
}
.intro-text-con h1{
  margin: 75px 0px;
  font-size: 15px;
}
.intro-text-con p{
  font-size: 20px;
}
.swiper-pagination{
  position: absolute;
  top: 65px !important;
  left: 135px !important;
  margin: 0;
  display: flex;
  align-items:center;
}
.swiper-pagination-bullet {
  margin: 0px 5px !important;
  border-radius: 0.5;
  width: 10px;
  height: 10px;
  background: #CCCC;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  border-radius: 5px;
	background: #FFFF;
  width: 70px;
  height: 10px;
}
.custom-swiper-nav{
  position: absolute;
  left : 50px;
  top : 50px;
}
</style>