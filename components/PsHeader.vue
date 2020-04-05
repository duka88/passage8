<template>
  <div class="header">
    <main-nav />
    <div class="wrap">
      <div class="text-wrap">
        <p id="title">Your Digital Solution  </p>
        <h1>Hire #1 Digital Marketing Company and Increase Your Business’ Growth</h1>
      </div>
    </div>
  </div>
</template>
<script>
import MainNav from '../components/MainNav.vue';
import { mapState } from 'vuex';
export default {
  components: {
    MainNav
  },
  name: 'PsHeader',
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


};

</script>
