<template>
  <div class="services-template">
    <div class="header">
      <main-nav page="s_media" />
      <div class="wrap title-wrap">
        <div class="text-wrap">
          <h2 id="title">Social Media Marketing<span class="text-red">.</span></h2>
        </div>
      </div>
    </div>
    <div class="sekcija1 container-full">
      <div class="w-50 ">
        <img class="services-img" src="@/assets/img/like_slika.png" alt="">
      </div>
      <div class="w-50">
        <div class="text-wrap">
          <h2>Social Media Advertising
            to Promote Your Business<span class="text-red">.</span>
          </h2>
          <div class="border-red"></div>
          <p>We are here to keep your audience engaged by providing relevant posts suitable for your customer base.
            Let’s work together to create engaging,
            unique content for your target audience. </p>
          <p class="text-grey text-bold">Let us help you connect with the right people!</p>
          <nuxt-link to='/contact' class="link-contact-wrap ">
            <p class="m-0">GET IN TOUCH</p>
            <img src="@/assets/img/arrow-red.png" alt="">
          </nuxt-link>
        </div>
      </div>
    </div>
    <div id="fixedArea" class="description-section">
      <div class="sticky">
        <img class="absolut-img" src="@/assets/img/SMM-prati-scroll.png" alt="">
      </div>
      <div class="container">
        <div class="text-wrap">
          <h2>What is Social Media Marketing<span class="text-red">?</span>
          </h2>
          <div class="border-red"></div>
          <p>Social media marketing is a practice of using social media platforms to connect and communicate with the targeted audience. It is a powerful way of reaching prospects and customers as well as building brands and increasing website traffic.</p>
          <p>The number of active internet users is increasing by the year. Only in 2019, almost 4.39 billion people were active internet users.
            It’s free to emphasize the importance of social media marketing and the impact it has on the modern world. </p>
          <p>Assuming that the majority of your targeted audience is already online if you aren’t making a strategic move and communicating with them directly, you are already behind. Rely on us to promote your business, products, and services.
            <b>Let us help you tell your story, and see for yourself why we are the best in the digital marketing industry.</b></p>
          <div class="devider"></div>
          <h3>Our Social Media Marketing Process<span class="text-red">.</span></h3>
          <p>With our proven competitive analysis, social media audits and custom-built strategies let us evaluate your social media presence and determine what socials work best for you and what strategies you should implement to delight your customers and prospects.</p>
          <ul>
            <li>
              <p class="list-style-line"></p>
              <div>
                <p class="text-red">Consulting & Creation of Strategy</p>
                <p>We are here to help you determine what your customers want,
                  where your expectations should be and where you may be falling short.</p>
              </div>
            </li>
            <li>
              <p class="list-style-line"></p>
              <div>
                <p class="text-red">Social Media Analytics and Performance Reporting</p>
                <p>The impact of social media marketing is powerful as long as you can track it!
                  Gathering data from social media platforms helps you guide
                  your social media strategy in the right way. We are here to show you how!</p>
              </div>
            </li>
            <li>
              <p class="list-style-line"></p>
              <div>
                <p class="text-red"> Creating Social Platform</p>
                <p>Choosing the right social media platform for your business
                  is of great importance. Not all of the socials will build your brand equally.
                  Relay on our experience in using social media advertising to our client’s advantage.</p>
              </div>
            </li>
            <li>
              <p class="list-style-line"></p>
              <div>
                <p class="text-red">Advertising & Audience Growth</p>
                <p>We will craft for you precise goals, tactics and strategies
                  for building unique user’s experience.
                  Our social media experts focus on what your audience wants
                  and need with following your company’s goals as well.</p>
              </div>
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
      title: '#1 Social Media Marketing & Management Agency | Passage 8'

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
  }


};

</script>
