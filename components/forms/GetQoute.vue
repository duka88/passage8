<template>
  <div class="get-qout">
    <p @click="openPop()">GET A QUOTE</p>
    <transition name="slide-fade">
      <div v-if="open" class="contact-us-form">
        <div class="form-wrap">
          <i @click="openPop()" class="fas fa-times close"></i>
          <h3>GET A QUOTE<span class="text-red">.</span></h3>
          <div class="info-wrap">
            <p :class="[step >= 1 ? 'done' : '']">Personal Information</p>
            <p :class="[step >= 2 ? 'done' : '']">Your Bussines</p>
            <p :class="[step === 3 ? 'done' : '']">Servises</p>
          </div>
          <div class="border" :class="{width33: step === 1, width66: step === 2, width100: step === 3}"></div>
          <form>
            <!-------STEP 1---------->
            <transition name="fade" mode="out-in">
              <div v-if="step === 1 " class="step-wrap" key="step1">
                <div class="input-wrap-50 ">
                  <input v-model="form.name.value" @blur="focusOut('name')" @focus="form.name.error = ''
          " type="text" placeholder="Company Name*">
                  <span class="error">{{form.name.error}}</span>
                </div>
                <div class="input-wrap-50">
                  <input v-model="form.email.value" @blur="focusOut('email')" @focus="form.email.error = ''" type="email" placeholder="Email*">
                  <span class="error">{{form.email.error}}</span>
                </div>
                <div class="input-wrap-50">
                  <input v-model="form.cName.value" type="text" placeholder="Company name">
                  <span class="error">{{form.cName.error}}</span>
                </div>
                <div class="input-wrap-50">
                  <i @click="pushWLinks()" v-if="wLinks.length < 5" class="fas fa-plus"></i>
                  <input v-model="form.wLink.value" type="text" placeholder="Link to your website" :disabled="wLinks.length >= 5">
                  <span class="error">
                    <span v-for="(value, index) in wLinks" :key="index" class="error">{{value}}
                      <i @click="removeWLink(index)" class="fas fa-times"></i></span>
                  </span>
                </div>
                <div class="input-wrap-50">
                  <i @click="pushWLinks()" v-if="sLinks.length < 5" class="fas fa-plus"></i>
                  <i @click="pushSLinks()" class="fas fa-plus"></i>
                  <input v-model="form.sLink.value" type="text" placeholder="Link to social networks" :disabled="sLinks.length >= 5">
                  <span class="error">
                    <span v-for="(value, index) in sLinks" :key="index" class="error">{{value}}
                      <i @click="removeSLinks(index)" class="fas fa-times"></i></span>
                  </span>
                </div>
                <div class="input-wrap-100 ">
                  <label for="">How’d you discover our services?</label>
                </div>
                <div v-for="(value, index) in relateLinks.values" class="input-wrap-50" v-if="relateLinks.text !== value">
                  <span @click="relateCheck(index, value)" class="checkbox">
                    <i v-if="relateLinks.value === index" class="fas fa-check"></i>
                  </span><span>{{value}}</span>
                </div>
                <div v-else class="input-wrap-50">
                  <input v-model="form.rLink.value" type="text" placeholder="Other">
                  <span class="error">{{form.rLink.error}}</span>
                </div>
              </div>
              <!-------STEP 2---------->
              <div v-if="step === 2 " class="step-wrap" key="step2">
                <div class="input-wrap-50 focus">
                  <input v-model="form.name.value" type="text" placeholder="Your Name*">
                  <span class="error">{{form.name.error}}</span>
                </div>
                <div class="input-wrap-50 focus">
                  <input v-model="form.email.value" type="email" placeholder="Email*">
                  <span class="error">{{form.email.error}}</span>
                </div>
                <div class="input-wrap-100 focus">
                  <textarea v-model="form.message.value" rows="5" placeholder="Your Message*"></textarea>
                  <span class="error">{{form.message.error}}</span>
                </div>
              </div>
              <!-------STEP 3---------->
              <div v-if="step === 3 " class="step-wrap" key="step3">
                <div class="input-wrap-50 ">
                  <input v-model="form.name.value" @blur="focusOut('name')" @focus="form.name.error = ''
          " type="text" placeholder="Company Name*">
                  <span class="error">{{form.name.error}}</span>
                </div>
                <div class="input-wrap-50">
                  <input v-model="form.email.value" @blur="focusOut('email')" @focus="form.email.error = ''" type="email" placeholder="Email*">
                  <span class="error">{{form.email.error}}</span>
                </div>
                <div class="input-wrap-100 ">
                  <label for="">How did you discover our services?</label>
                </div>
                <div class="input-wrap-50 ">
                  <span class="checkbox"></span><span>I found you by Google search</span>
                </div>
                <div class="input-wrap-50 ">
                  <span class="checkbox"></span><span>I found you by Google search</span>
                </div>
                <div class="input-wrap-50 ">
                  <span class="checkbox"></span><span>I found you by Google search</span>
                </div>
                <div class="input-wrap-50 ">
                  <span class="checkbox"></span><span>I found you by Google search</span>
                </div>
              </div>
            </transition>
          </form>
          <div class="button-wrap">
            <div @click="step--" class="red-btn">
              PREVIUS
            </div>
            <div @click="step++" class="red-btn">
              NEXT
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Checkbox from '@/components/forms/inputs/Checkbox.vue';
export default {
  components: {
    Checkbox
  },
  data() {
    return {
      step: 1,
      open: false,
      wLinks: [],
      sLinks: [],
      relateLinks: {
        values: ['I Was Referred By A Friend', 'I Found You On Social Network', 'Google search', 'Other'],
        value: '',
        text: false
      },
      form: {
        name: {
          value: '',
          error: ''
        },
        email: {
          value: '',
          error: ''
        },
        cName: {
          value: '',
          error: ''
        },
        wLink: {
          count: 1,
          value: '',
          error: ''
        },
        sLink: {
          count: 1,
          value: [],
          error: ''
        },
        rLink: {
          value: '',
          error: ''
        },
        message: {
          value: '',
          error: ''
        }
      },
    }
  },
  methods: {
    openPop() {

      if (this.open) {
        this.open = false;
        document.body.style.overflow = 'auto';
      } else {
        this.open = true;
        document.body.style.overflow = 'hidden';
      }

    },
    relateCheck(index, input) {
      this.relateLinks.value = index;
      this.form.rLink.value = input;
      if(this.form.rLink.value === 'Other') {
          this.relateLinks.text = 'Other';
           this.form.rLink.value = '';
      }else{
        this.relateLinks.text = false;
      }
    },
    focusOut(fild) {
      this.validation(fild)
    },
    pushSLinks() {
      this.sLinks.push(this.form.sLink.value);
      this.form.sLink.value = '';
    },
    removeSLinks(index) {
      this.sLinks.splice(index, 1);

    },
    pushWLinks() {
      this.wLinks.push(this.form.wLink.value);
      this.form.wLink.value = '';
    },
    removeWLink(index) {
      this.wLinks.splice(index, 1);

    },
    validation(fild) {

      if (fild === 'email') {
        if (this.form.email.value === '') {
          this.form.email.error = 'Email is required!'
        } else if (!this.validateEmail(this.form.email.value)) {
          this.form.email.error = 'Value must be a email!'
        } else {
          this.form.email.error = ''
        }
      } else if (fild === 'message') {
        if (!this.form.message.value) {
          this.form.message.error = 'Message is required!'
        } else {
          this.form.message.error = ''
        }
      } else {
        if (!this.form.name.value) {
          this.form.name.error = 'Name is required!'
        } else {
          this.form.name.error = ''
        }
      }
    },

    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(email);
    },


  },
  computed: {
    chackeErrors() {
      return Object.values(this.form).filter(item => item.error !== '').length;
    }
  }


};

</script>
