<template>
  <div class=" services-template contact-template">
    <div class="header">
      <main-nav />
     <div class="wrap title-wrap">
        <div class="text-wrap">
          <h2 id="title">Contact Us<span class="text-red">.</span></h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="w-100">
        <h2>Lets Talk<span class="text-red">.</span></h2>
      </div>
      <div class="w-50 ">
        <div class="text-wrap">
          
          <div class="border-red"></div>
          <p>For any information, questions or help, give us a call or send us an email.
            Let’s create something amazing!
          </p>       
        </div>
      </div>
      <div class="w-50 email-wrap">
        <p>Let’s Collaborate</p>
        <p class="purple">info@passageeight.com</p>
        <p>What’s up</p>
        <p class="orange">info@passageeight.com</p>
      </div>
    </div>
    <contact-us />
  </div>
</template>
<script>
import MainNav from '@/components/MainNav.vue';
import ContactUs from '@/components/forms/ContactUs.vue';
import { mapState } from 'vuex';
export default {
  components: {
    MainNav,
    ContactUs
  },
  head() {
    return {
      title: 'Contact Us | Passage 8'

    }
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      winWidth: 'winWidth'
    })
  },
  mounted() {

  }

};

</script>
