<template>
 <section class="contact">
    <article class="contact_container">
      <div class="contact_text">
        <h2>Contact Me</h2>
        <p>지속적으로 경험과 기술을 습득하여<br>
          <span>성장하는 모습이 보이는</span> 개발자가 되겠습니다.<br>
          아래의 버튼을 클릭하여 연락처를 확인해주세요.</p>
        <div class="contact_btn" @click="contact = true">
            연락처를 확인하세요!
        </div>
        <div class="contact_on" v-if="contact == true">
          <div class="contact_close" @click="contact = false"></div>
          E-mail : qudrn0501@naver.com<br>
          Mobile : 010-8709-5900<br>
          github : https://github.com/qudrn0501<br>
        </div>
      </div>
      <div class="contact_img"></div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'contact-page',
  components: {

  },
  data() {
    return {
      contact: false,
    }
  }
}
</script>

