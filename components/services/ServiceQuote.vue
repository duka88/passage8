<template>
  <div class="form-border ">
    <div class="form-section">
      <div class="wrap">
        <div class="text-wrap">
          <h2>Let’s Collaborate <span class="text-red">.</span></h2>
        </div>
        <div class="red-btn">
          <get-qoute v-if="page === 'home'" />
          <seo-form v-if="page === 'seo'" />
          <w-d-form v-if="page === 'web_dev'" />
          <design-form v-if="page === 'design'" />
          <s-m-form v-if="page === 's_media'" />
          <ppc-form v-if="page === 'ppc'" />
          <img src="@/assets/img/arrow-right.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GetQoute from '@/components/forms/GetQoute.vue';
import SeoForm from '@/components/forms/SeoForm.vue';
import WDForm from '@/components/forms/WDForm.vue';
import DesignForm from '@/components/forms/DesignForm.vue';
import SMForm from '@/components/forms/SMForm.vue';
import PpcForm from '@/components/forms/PpcForm.vue';
export default {
  props: ['page'],
  name: 'ServiceQuote',
  components: {
    GetQoute,
    SeoForm,
    WDForm,
    DesignForm,
    SMForm,
    PpcForm
  },
};

</script>
