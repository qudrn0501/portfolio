<template>
  <div class="black_bg" v-if="modal1 == true">
    <div class="white_bg">
      <div @click="modal1 = false"></div>
      <img src="../../public/img/pj1_mockup.jpg" alt="">
    </div>
  </div>
<!-- project 1 -->
  <section class="project scroll" id="project">
    <article class="project_container">
      <h1>Project 1</h1>
      <ul class="pjt_subject">
        <li>
          <h3>서문시장 야시장</h3>
          <span>개인 프로젝트</span>
        </li>
        <li>
          <button class="pjt2_open" @click="modal1 = true">Mockup</button>
          <button onclick="window.open('https://seomun.fly.dev/');">Page Link</button>
        </li>
      </ul>
      
      <swiper
        :scrollbar="{
          hide: false,
        }"
        :slides-per-view="1"
        :space-between="50"
        :modules="modules"
        class="mySwiper"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide class="pjt_page">
          <img class="pjt_pc" src="../../public/img/seomun.png" alt="">
          <img class="pjt_mob" src="../../public/img/seomun_mob.png" alt="">
        </swiper-slide>
        <swiper-slide class="pjt_page">
          <img class="pjt_pc" src="../../public/img/seomun_notice_pc.png" alt="">
          <img class="pjt_mob" src="../../public/img/seomun_notice_mob.png" alt="">
        </swiper-slide>
      </swiper>
      <!-- <div class="pjt_page">
        <img src="../../public/img/seomun.png" alt="">
      </div> -->
      <ul class="pjt_content">
        <li>
          <h3>사용 언어</h3>
          <p>HTML5 / CSS3 / JavaScript / jQuery<br>
            Express.js / node.js / MySQL</p>
        </li>
        <li>
          <h3>제작 기간</h3>
          <p>2022.04 ~ 2022.05</p>
        </li>
        <li>
          <h3>주요 구현 기능</h3>
          <p>CRUD (참여마당 - 공지사항 게시판)</p>
        </li>
      </ul>
    </article>
  </section>

  <div class="black_bg" v-if="modal2 == true">
    <div class="white_bg">
      <div @click="modal2 = false"></div>
      <img src="../../public/img/pj2_mockup.jpg" alt="">
    </div>
  </div>
<!-- project 2 -->
  <section class="project scroll">
    <article class="project_container">
      <h1>Project 2</h1>
      <ul class="pjt_subject">
        <li>
          <h3>뚜레쥬르</h3>
          <span>팀 프로젝트</span>
        </li>
        <li>
          <button class="pjt2_open" @click="modal2 = true">Mockup</button>
          <button onclick="window.open('https://team-tous.fly.dev/');">Page Link</button>
        </li>
      </ul>
      <swiper
        :scrollbar="{
          hide: false,
        }"
        :slides-per-view="1"
        :space-between="50"
        :modules="modules"
        class="mySwiper"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide class="pjt_page pjt_page2">
          <img class="pjt_pc" src="../../public/img/touslesjours.png" alt="">
          <img class="pjt_mob" src="../../public/img/tous_mob.png" alt="">
        </swiper-slide>
        <swiper-slide class="pjt_page pjt_page2">
          <img class="pjt_pc" src="../../public/img/tous_event_pc.png" alt="">
          <img class="pjt_mob" src="../../public/img/tous_event_mob.png" alt="">
        </swiper-slide>
      </swiper>
      <!-- <div class="pjt_page pjt_page2">
        <img src="../../public/img/touslesjours.png" alt="">
      </div> -->
      <ul class="pjt_content">
        <li>
          <h3>사용 언어</h3>
          <p>HTML5 / CSS3 / JavaScript / jQuery<br>
            Express.js / node.js / MySQL</p>
        </li>
        <li>
          <h3>제작 기간</h3>
          <p>2022.05 ~ 2022.07</p>
        </li>
        <li>
          <h3>제작 담당 페이지</h3>
          <p>Header / 메인 페이지 / 이벤트 페이지 / 매장찾기 페이지</p>
          <p>3인 / 약 37.5% 담당</p>
        </li>
      </ul>
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
  name: 'project-page',
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
  data() {
    return {
      modal1: false,
      modal2: false,
    };
  }

  
  
}
</script>


