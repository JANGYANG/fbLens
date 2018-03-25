<template>
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" style="background-color:yellow;">Slide 1</div>
      <div class="swiper-slide" style="background-color:blue;">Slide 2</div>
      <div class="swiper-slide" style="background-color:red;">Slide 3</div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  mounted () {
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      mousewheel: true,
      loop: false,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
      },
    })
  }
}
</script>

<style>
@import '@/node_modules/swiper/dist/css/swiper.min.css';
.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-slide {
  height: 100%;
  width: 100%;
}
</style>