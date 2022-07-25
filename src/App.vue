<template>
  <div id="top"></div>
  <header>
    <div class="logo">bkKim.</div>
    <div class="btn_nav">
      <span></span>
      <span></span>
      <span></span>
    </div>
  
    <nav class="mapsite"> <!--mapsite menu-->
      <div class="btn_close"></div>
      <ul>
        <li v-on:click="gotointro">intro</li>
        <li v-on:click="gotoskill">skills</li>
        <li v-on:click="gotoproject">project</li>
        <li v-on:click="gotowebclone">webclone</li>
        <li v-on:click="gotocontact">contact</li>
      </ul>
    </nav>
  </header>
  <intro id="intro"></intro>
  <skill id="skill"></skill>
  <project id="project"></project>
  <webclone id="webclone"></webclone>
  <contact id="contact"></contact>
  <div class="topbtn" v-on:click="gototop">TOP</div>
</template>

<script>
import intro from './components/intro.vue'
import skill from './components/skill.vue'
import project from './components/project.vue'
import webclone from './components/webclone.vue'
import contact from './components/contact.vue'

export default {
  name: 'App',
  methods: {
    gotointro() {
      const contact = document.getElementById('intro')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoskill() {
      const contact = document.getElementById('skill')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoproject() {
      const contact = document.getElementById('project')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotowebclone() {
      const contact = document.getElementById('webclone')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotocontact() {
      const contact = document.getElementById('contact')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    },
    gototop() {
      const contact = document.getElementById('top')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    }
  },
  components: {
    intro,
    skill,
    project,
    webclone,
    contact
  }
}
</script>

<style scoped>
#top {
  display: none;
}
.mapsite {
  display: none;
}
header {
  width: 100%; height: 80px;
  background-color: aqua;
  position: fixed;
}
header .logo {
  font-family: "P22 Underground";
  font-size: 40px;
  font-weight: 600;
  color: #3182F6;
}

.topbtn {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
