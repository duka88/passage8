<template>
  <div class="header">
   <main-nav />
    <div class="wrap">
      <div class="text-wrap">
        <h1 id="title">Digital Marketing Company and Increase Your Business Growth</h1>
        <p>You have a great business idea
          that you want to present to the world?
          Passage 8 is here to help! </p>
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
