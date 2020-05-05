<template>
  <div class="service-slider">
    <div class="width-50">
      <div class="text-area">
        <div class="head">         
          <span>{{show.num}}</span>
        </div>
        <div class="body">
           <h2>{{show.h}}</h2>
        </div>
        <div class="s-footer">
          <div @click="changeText()" class="link-contact-wrap">
            <img src="@/assets/img/arrow-red.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="width-50 image-wrap">
      <transition name="fade">
        <img class="slider-img" :src="require(`@/assets/img/${show.img}`)" :key="show.id" alt="">
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ServiceSlider',
  data() {
    return {
      cont: 0,
      show: {
        title: 'GRAPHIC DESIGN',
        h: 'GRAPHIC DESIGN',
        num: '01',
        img: 'graphic-design-slika.jpg'


      },

      services: [{
          title: 'GRAPHIC DESIGN',
          h: 'GRAPHIC DESIGN',
          num: '01',
          img: 'graphic-design-slika.jpg'

        },
        {
          title: 'Web Development',
          h: 'WEB DEV',
          num: '02',
          img: 'services-2.jpg'
        },
        {
          title: 'IT Maintenance',
          h: 'IT MAINTENANCE',
          num: '03',
          img: 'services-3.jpg'
         
        },
        {
          title: 'Content Marketing',
          h: 'CONTENT',
          num: '04',
          img: 'services-4.jpg'
        },
        {
          title: 'Social Media',
          h: 'SOCIAL MEDIA',
          num: '05',
          img: 'services-5.jpg'
        },
        {
          title: 'Pay-Per-Click',
          h: 'PPC',
          num: '06',
          img: 'services-6.jpg'
        },
        {
          title: 'Graphic Design',
          h: 'GRAPHIC DESIGN',
          num: '07',
          img: 'services-7.jpg'
        },
        {
          title: 'White Label',
          h: 'WHITE LABEL',
          num: '08',
          img: 'services-8.jpg'
        },

      ]

    }
  },
  methods: {
    changeText() {

      if (this.cont < 7) {
        this.cont++;
      } else {
        this.cont = 0;
      }
      this.show.id = this.cont;
      this.show.num = this.services[this.cont].num;
      this.show.img = this.services[this.cont].img;
      this.show.h = this.services[this.cont].h;
      
    }
  },
};

</script>
