<template>
  <div class="input-wrap-100 ">
    <div v-for="(value, index) in values" class="input-wrap-50 ">
      <span @click="check(index, value)" class="checkbox">
        <i v-if="checkt === index" class="fas fa-check"></i>
      </span><span>{{value}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['values', 'value'],
  data() {
    return {
      checkt: false
    }
  },
  methods: {
    check(index, input) {
      this.checkt = index;
      this.value = input;
    }
  }
}

</script>
