<template>
  <div>
    <ps-header />
    <!-- <div class="" v-if="isLoading">
      <svg-vue />
    </div> -->
    <div class="services">
      <our-services v-if="winWidth > 720" />
      <div v-else class="container-full services-mob">
        <div class="container">
          <div class="header-box">
            <div class="wrap">
              <p><a href="#servicesBox">LEARN MORE</a></p>
              <img src="@/assets/img/arrow-right.png" alt="">
            </div>
            <h2 id="servText">OUR SERVICES</h2>
          </div>
        </div>
        <services-mob />
      </div>
    </div> 
    <div class="strategies">
      <div class="text-wrap">
        <div class="wrap">
          <h2>Successfully integrated digital marketing
            strategies<span>.</span></h2>
          <p>We will never offer unnecessary services because we understand what it means to run a business, and we recognize the importance and uniqueness of your brand. Each project we take on gets our full attention.</p>
          <div class="link-wrap">
            <p>LEARN MORE</p>
            <img src="@/assets/img/arrow-red.png" alt="">
          </div>
        </div>
      </div>
      <div class="video-wrap">
        <div class="wrap">
          <img srcset="@/assets/img/osmica.png 1900w,
                       @/assets/img/osmica-720.png 720w" sizes="(min-width: 720px) 1900w,
                      (max-width: 720px) 720w" src="@/assets/img/osmica.png" alt="osmica">
        </div>
      </div>
    </div>
    <how-mob v-if="winWidth < 721" />
    <client-only>
      <video-vue />
    </client-only>
    <why-vue />
    <shadow-vue v-if="winWidth > 720" />
    <shadow-mob v-else />
    <contact-form />
  </div>
</template>
<script>
import OurServices from '@/components/OurServices.vue';
import ServicesMob from '@/components/mob_components/ServicesMob.vue';
import ScrollVue from '@/components/ScrollVue.vue';
import HowMob from '@/components/mob_components/HowMob.vue';
import VideoVue from '@/components/VideoVue.vue';
import WhyVue from '@/components/WhyVue.vue';
import ShadowVue from '@/components/Shadow.vue';
import ShadowMob from '@/components/mob_components/ShadowMob.vue';
import ContactForm from '@/components/ContactForm.vue';
import SvgVue from '@/components/Svg.vue';
import PsHeader from '@/components/PsHeader.vue';
import { mapState } from 'vuex';

export default {
  components: {
    OurServices,
    ServicesMob,
    ScrollVue,
    VideoVue,
    HowMob,
    WhyVue,
    ShadowVue,
    ShadowMob,
    ContactForm,
    PsHeader,
    SvgVue

  },
  data() {
    return {
      loading: false
    }
  },
  head() {
    return {
      title: 'Digital Marketing Agency | Best Online Marketing Services | Passage 8',
   
    }
  },

  fetch({ store, from }) {
    let isFrom = from;

    if (isFrom) {

      store.commit('IS_LOADING', false)

    } else {
      store.commit('IS_LOADING', true)
    }

  },
  computed: {
    ...mapState({
      isLoading: 'isLoading',
      winWidth: 'winWidth'
    })
  }


}

</script>
