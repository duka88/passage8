<template>
  <div class="main-nav">
    <div v-if="winWidth > 720" class="nav">
      <ul>
        <li>
          <nuxt-link to='/'>HOME</nuxt-link>
        </li>
        <li>
          <nuxt-link to='/about-us'>ABOUT US</nuxt-link>
        </li>
        <li class="sub-menu-wrap">
          <nuxt-link to='/services'>SERVICES</nuxt-link><i class="fas fa-chevron-down"></i>
          <ul class="sub-menu">
            <li>
              <nuxt-link to='/seo-services'>SEO</nuxt-link>
            </li>
            <li>
              <nuxt-link to='/web-development-services'>DEVELOPMENT</nuxt-link>
            </li>
            <li>
              <nuxt-link to='/it-maintenance-services'>MAINTENANCE</nuxt-link>
            </li>
            <li>
              <nuxt-link to='/content-marketing-services'>CONTENT</nuxt-link>
            </li>
            <li>
              <nuxt-link to='/social-media-marketing-services'>SOCIAL MEDIA</nuxt-link>
            </li>
            <li>
              <nuxt-link to='/ppc-management-services'>PPC</nuxt-link>
            </li>
            <li>
              <nuxt-link to='/graphic-design-services'>DESIGN</nuxt-link>
            </li>
            <li>
              <nuxt-link to='/white-label-services'>WHITE LABEL</nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link to='/contact'>CONTACT US</nuxt-link>
        </li>
        <li>
           <get-qoute />
        </li>
      </ul>
    </div>
    <div v-else class="mob-menu">
      <div @click="active = !active" :class="{active: active}" class="hamburger">
        <div class="bar-1"></div>
        <div class="bar-2"></div>
      </div>
      <div class="mob-nav" :class="{active: active}">
        <ul>
          <li>
            <nuxt-link to='/'>HOME</nuxt-link>
          </li>
          <li>
            <nuxt-link to='/about'>ABOUT</nuxt-link>
          </li>
          <li>
            <nuxt-link to='/services'>SERVICES</nuxt-link>
          </li>
          <li>
            <nuxt-link to='/projects'>PROJECTS</nuxt-link>
          </li>
          <li>
            <nuxt-link to='/contact'>CONTACT</nuxt-link>
          </li>
         
        </ul>
      </div>
    </div>
    
  </div>
</template>
<script>
import GetQoute from '@/components/forms/GetQoute.vue';
import { mapState } from 'vuex';
export default {
  name: 'MainNav',
  components: {
    GetQoute
  },
  data() {
    return {
      active: false
    }
  },

  computed: {
    ...mapState({
      winWidth: 'winWidth'
    })
  },
  mounted() {

    this.$store.commit('SET_WIDTH', window.innerWidth);
    window.addEventListener('resize', () => {
      this.$store.commit('SET_WIDTH', window.innerWidth);

    });
  }

};

</script>
