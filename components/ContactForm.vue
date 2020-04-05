<template>
  <div class="form-border">
    <div class="form-section">
      <div class="wrap">
        <div class="text-wrap">
          <h2>Ready to see<br>
            what our <span>experts</span> can do
            for your <span>business</span>?</h2>
        </div>
        <nuxt-link to='/contact' class="red-btn">
          <p>CONTACT US</p>
          <img src="@/assets/img/arrow-right.png" alt="">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ContactForm'
};

</script>
