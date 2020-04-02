<template>
  <div class="footer">
    <div @click="backToTop()" id="backToTop">
      <img src="@/assets/img/arrow-up.png" alt="">
    </div>
    <div class="wrap">
      <div class="grid">
        <div id="col-0" class="col">
          <h2>Passage 8</h2>
          <p class="mt-0">Your Digital Solution <span class="text-red">.</span></p>
        </div>
        <div id="col-1" class="col">
          <h3>About Us</h3>
          <p>Our mission is to make your brand
            stand out by creating and implementing
            custom marketing strategies
            that will increase your sales
            and grow organic traffic,
            while you focus on running your business.</p>
        </div>
        <div id="col-2" class="col">
          <div class="wrap">
            <h3>Services</h3>
            <ul>
              <li>
                <nuxt-link to='/web-development-services'>Development</nuxt-link>
              </li>
              <li>
                <nuxt-link to='/seo-services'>Seo</nuxt-link>
              </li>
              <li>
                <nuxt-link to='/it-maintenance-services'>Maintenance</nuxt-link>
              </li>
              <li>
                <nuxt-link to='/content-marketing-services'>Content</nuxt-link>
              </li>
              <li>
                <nuxt-link to='/social-media-marketing-services'>Social Media</nuxt-link>
              </li>
              <li>
                <nuxt-link to='/ppc-management-services'>PPC</nuxt-link>
              </li>
              <li>
                <nuxt-link to='/graphic-design-services'>Design</nuxt-link>
              </li>
              <li>
                <nuxt-link to='/white-label-services'>White Label</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div id="col-3" class="col">
          <div class="wrap">
            <h3>Helpful Links</h3>
            <ul>
              <li>
                <nuxt-link to='/'>Support</nuxt-link>
              </li>             
              <li>
                <nuxt-link to='/'>Terms & Conditions</nuxt-link>
              </li>
              <li>
                <nuxt-link to='/'>Privacy Policy</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div id="col-4" class="col">
          <h3>Contact Us</h3>
          <a href="mail:passage8"><i class="fas fa-envelope"></i> passage8.com</a>
        </div>
        <div class="social-wrap">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-behance"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PsFooter',

  data() {
    return {

      form: {
        text: '',
      }
    }
  },
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};

</script>
