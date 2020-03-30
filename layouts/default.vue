<template>
  <div class="main">
    <nuxt />
    <ps-footer />
  </div>
</template>
<script>
import PsFooter from '../components/PsFooter.vue';

export default {
  head() {
    return {
      meta: [{
        name: "robots", 
        content: "noindex"
      }]

    }
  },
  components: {

    PsFooter
  },
  mounted() {

    let title = document.getElementById('title');
    let strText = title.textContent;
    let splitText = strText.split("");
    title.textContent = "";


    splitText.forEach((item) => {

      title.innerHTML += `<span class="fadeOut">${item}</span>`;
    });

    let char = 0;
    let timer = setInterval(onTick, 50);
    let span = document.querySelectorAll('.fadeOut');


    function onTick() {

      span[char].classList.add('fadeIn');
      char++;

      if (char === splitText.length) {
        complited();
        return;
      }
    }

    function complited() {
      clearInterval(timer);
      timer = null;
    }

  }
}

</script>
