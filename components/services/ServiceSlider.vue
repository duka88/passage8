<template>
  <div class="service-slider">
    <div class="width-50">
      <div class="text-area">
        <div class="head">         
          <span>{{show.num}}</span>
        </div>
        <div class="body">
          <nuxt-link :to='show.link'>
             <h2>{{show.h}}</h2>
          </nuxt-link>
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
        img: 'graphic-design-slika.jpg',
        link: '/graphic-design-services'

      },

      services: [{
          title: 'GRAPHIC DESIGN',
          h: 'GRAPHIC DESIGN',
          num: '01',
          img: 'graphic-design-slika.jpg',
          link: '/graphic-design-services'

        },
        {
          title: 'Web Development',
          h: 'WEB DEV',
          num: '02',
          img: 'services-2.jpg',
          link: '/web-development-services'
        },
        {
          title: 'IT Maintenance',
          h: 'IT MAINTENANCE',
          num: '03',
          img: 'services-3.jpg',
          link: '/it-maintenance-services'
         
        },
        {
          title: 'Content Marketing',
          h: 'CONTENT',
          num: '04',
          img: 'services-4.jpg',
          link: '/content-marketing-services'
        },
        {
          title: 'Social Media',
          h: 'SOCIAL MEDIA',
          num: '05',
          img: 'soc-media-slika.jpg',
          link: '/social-media-marketing-services'
        },
        {
          title: 'Pay-Per-Click',
          h: 'PPC',
          num: '06',
          img: 'services-6.jpg',
          link: '/ppc-management-services'
        },
        {
          title: 'SEO',
          h: 'SEO',
          num: '07',
          img: 'services-7.jpg',
          link: '/seo-services'
        },
        {
          title: 'White Label',
          h: 'WHITE LABEL',
          num: '08',
          img: 'services-8.jpg',
          link: '/white-label-services'
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
      this.show.link = this.services[this.cont].link;
      
    }
  },
};

</script>
