<template>
  

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
        <li class=".main_scroll" v-on:click="gotointro">intro</li>
        <li class=".main_scroll" v-on:click="gotostack">stack</li>
        <li class=".main_scroll" v-on:click="gotoproject">project</li>
        <li class=".main_scroll" v-on:click="gotowebclone">webclone</li>
        <li class=".main_scroll" v-on:click="gotocontact">contact</li>
      </ul>
    </nav>
  </header>
  <intro id="intro"></intro>
  <stack id="stack"></stack>
  <project id="project"></project>
  <webclone id="webclone"></webclone>
  <contact id="contact"></contact>
  <div class="topbtn" v-on:click="gototop">TOP</div>
</template>

<script>
import intro from './components/intro.vue'
import stack from './components/stack.vue'
import project from './components/project.vue'
import webclone from './components/webclone.vue'
import contact from './components/contact.vue'

export default {
  name: 'App',
  data() {
    return {
      modal2 : false,
    }
  },
  methods: {
    gotointro() {
      const contact = document.getElementById('intro')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoskill() {
      const contact = document.getElementById('stack')
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
    stack,
    project,
    webclone,
    contact
  },

}

</script>
