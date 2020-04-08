<template>
  <div class="services-template">
    <div class="header">
      <main-nav page="seo"/>
      <div class="wrap title-wrap">
        <div class="text-wrap">
          <h2 id="title">Seo<span class="text-red">.</span></h2>
        </div>
      </div>
    </div>
    <div class="sekcija1 container-full">
      <div class="w-50 ">
        <img class="services-img" src="@/assets/img/services-1.jpg" alt="">
      </div>
      <div class="w-50">
        <div class="text-wrap">
          <h2>Lorem ipsum
            dolor sit amet.
          </h2>
          <div class="border-red"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis, dui non vestibulum gravida, diam nibh bibendum sem, et congue mauris diam eu purus. Mauris ut porttitor nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec non enim non nulla </p>
          <div class="link-contact-wrap ">
            <p>REQUEST AN AUDIT</p>
            <img src="@/assets/img/arrow-red.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="description-section">
      <div class="container">
        <div class="text-wrap">
          <h2>Lorem ipsum
            dolor sit amet.
          </h2>
          <div class="border-red"></div>
          <p>Duis feugiat eros tellus, id rhoncus urna ultricies at. Phasellus porttitor diam sed nisi lobortis, sit amet bibendum nibh suscipit. Pellentesque a auctor magna, in accumsan nisi. Proin a ultrices orci, ut laoreet neque. In hac habitasse platea dictumst. Cras consequat sem ex, at viverra eros ullamcorper vitae. Donec congue eget odio ut convallis. In non tincidunt neque. Cras accumsan orci mi, sit amet tempus ante iaculis eget.</p>
          <h3>Dolor sit</h3>
          <p>Aliquam erat volutpat. Donec lacinia aliquet pellentesque. Proin quis tortor tempor, luctus nulla vitae, dictum nulla. Integer nec egestas dolor. Ut sit amet rhoncus ante, malesuada commodo nulla. Maecenas eget nisi erat. Donec gravida, tellus id sagittis maximus, sapien mi ultricies nisi, id congue sem diam id neque. Praesent iaculis ante in nulla venenatis imperdiet.</p>
          <ul>
            <li>
              <p class="list-style-line"></p>
              <p>Proin fringilla sapien ex, id porta tortor auctor vitae. Cras id lorem hendrerit, bibendum quam nec, congue</p>
            </li>
            <li>
              <p class="list-style-line"></p>
              <p>Proin fringilla sapien ex, id porta tortor auctor vitae. Cras id lorem hendrerit, bibendum quam nec, congue</p>
            </li>
            <li>
              <p class="list-style-line"></p>
              <p>Proin fringilla sapien ex, id porta tortor auctor vitae. Cras id lorem hendrerit, bibendum quam nec, congue</p>
            </li>
            <li>
              <p class="list-style-line"></p>
              <p>Proin fringilla sapien ex, id porta tortor auctor vitae. Cras id lorem hendrerit, bibendum quam nec, congue</p>
            </li>
          </ul>
          <h3>Dolor sit</h3>
          <p>Aliquam erat volutpat. Donec lacinia aliquet pellentesque. Proin quis tortor tempor, luctus nulla vitae, dictum nulla. Integer nec egestas dolor. Ut sit amet rhoncus ante, malesuada commodo nulla. Maecenas eget nisi erat. Donec gravida, tellus id sagittis maximus, sapien mi ultricies nisi, id congue sem diam id neque. Praesent iaculis ante in nulla venenatis imperdiet.</p>
        </div>
      </div>
    </div>
    <div class="slider-section">
      <h2>Lorem ipsum
        dolor sit amet.
      </h2>
      <service-slider v-if="winWidth > 850" />
      <services-mob v-else />
      <div class="text-wrap">
        <div class="border-red"></div>
        <p>Aliquam erat volutpat. Donec lacinia aliquet pellentesque. Proin quis tortor tempor, luctus nulla vitae, dictum nulla. Integer nec egestas dolor. Ut sit amet rhoncus ante, malesuada commodo nulla. Maecenas eget nisi erat. Donec gravida, tellus id sagittis maximus, sapien mi ultricies nisi, id congue sem diam id neque. Praesent iaculis ante in nulla venenatis imperdiet.</p>
        <p class="text-bold">Aliquam erat volutpat. Donec lacinia aliquet pellentesque. Proin quis tortor tempor, luctus nulla vitae, dictum nulla. Integer nec egestas dolor. Ut sit amet rhoncus ante, malesuada commodo nulla. Maecenas eget nisi erat. Donec gravida, tellus id sagittis maximus, sapien mi ultricies nisi, id congue sem diam id neque. Praesent iaculis ante in nulla venenatis imperdiet.</p>
      </div>
    </div>
    <service-quote />
  </div>
</template>
<script>
import MainNav from '@/components/MainNav.vue';
import ServiceSlider from '@/components/services/ServiceSlider.vue';
import ServiceQuote from '@/components/services/ServiceQuote.vue';
import ServicesMob from '@/components/mob_components/ServicesMob.vue';
import { mapState } from 'vuex';
export default {
  components: {
    MainNav,
    ServiceSlider,
    ServiceQuote,
    ServicesMob,
  },
  head() {
    return {
      title: 'SEO Services: Search Engine Optimization Experts | Passage 8'
    
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
