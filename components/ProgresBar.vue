<template>
  <div class="progres">
           <div class="bar" :style="{width: this.width + '%'}"></div>
        </div>
</template>
<style lang="css">
  .progres {
    width: 500px;
    height: 30px;
    border: 1px solid red;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
  }
  .bar {
    width: 0;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 1s ease-in;
    background: rgb(255,255,255);
    background: linear-gradient(135deg, rgba(255,255,255,1) 2%, rgba(0,147,175,0.3029586834733894) 48%, rgba(0,147,175,1) 100%);
  }
</style>
<script>

export default {
  name: 'ProgresBar',
  props:['width']
};

</script>
