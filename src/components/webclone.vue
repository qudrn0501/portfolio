<template>
  <section class="clone scroll">
    <article class="clone_container">
      <h1>Web Clones</h1>
      <swiper
        :scrollbar="{
          hide: false,
        }"
        :breakpoints="{
          989: {
             slidesPerView: 3,
             spaceBetween: 13.3333
          }
        }"
        :slides-per-view="1"
        :space-between="50"
        :modules="modules"
        class="mySwiper clone_box"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide class="clone_div">
          <div class="clone_page">
            <img class="clone_pc" src="../../public/img/singhouse.png" alt="">
            <img class="clone_mobile" src="../../public/img/singhouse_mob.png" alt="">
          </div>
          <li class="clone_content">
            <h3>싱그러운 집</h3>
            <p>HTML5 / CSS3 / JavaScript / jQuery</p>
            <button onclick="window.open('http://qudrn0501.dothome.co.kr/singhouse/singhouse_main.html');">Page Link</button>
          </li>
        </swiper-slide>

        <swiper-slide class="clone_div">
          <div class="clone_page">
            <img class="clone_pc" src="../../public/img/pollexzone.png" alt="">
            <img class="clone_mobile" src="../../public/img/pollex_mob.png" alt="">
          </div>
          <li class="clone_content">
            <h3>POLLEXZONE</h3>
            <p>HTML5 / CSS3 / JavaScript / jQuery</p>
            <button onclick="window.open('http://qudrn0501.dothome.co.kr/pollexzone/pollexzone_main.html');">Page Link</button>
          </li>
        </swiper-slide>

        <swiper-slide class="clone_div">
          <div class="clone_page">
            <img class="clone_pc" src="../../public/img/dcaf.png" alt="">
            <img class="clone_mobile" src="../../public/img/dcaf_mob.png" alt="">
          </div>
          <li class="clone_content">
            <h3>대전문화재단</h3>
            <p>HTML5 / CSS3 / JavaScript / jQuery</p>
            <button onclick="window.open('http://qudrn0501.dothome.co.kr/dcaf/dcaf.html');">Page Link</button>
          </li>
        </swiper-slide>

      </swiper>
      <!-- <ul class="clone_box">
        <li class="clone_">
          <img src="../../public/img/singhouse.png" alt="">
        </li>
        <li>
          <img src="../../public/img/pollexzone.png" alt="">
        </li>
        <li>
          <img src="../../public/img/dcaf.png" alt="">
        </li>
      </ul> -->
      <!-- <ul class="clone_content">
        <li>
          <h3>싱그러운 집</h3>
          <p>HTML5 / CSS3 / JavaScript / jQuery</p>
          <button onclick="window.open('https://www.naver.com');">Page Link</button>
        </li>
        <li>
          <h3>POLLEXZONE</h3>
          <p>HTML5 / CSS3 / JavaScript / jQuery</p>
          <button onclick="window.open('https://www.naver.com');">Page Link</button>
        </li>
        <li>
          <h3>대전문화재단</h3>
          <p>HTML5 / CSS3 / JavaScript / jQuery</p>
          <button onclick="window.open('https://www.naver.com');">Page Link</button>
        </li>
      </ul> -->
    </article>
  </section>
</template>

<script>
 // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/scrollbar";
// import required modules
import { Scrollbar } from "swiper";



export default {
  name: 'webclone-page',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Scrollbar],
      };
    },
}

</script>
