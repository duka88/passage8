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
                  <i @click="pushWLinks()" v-if="form.wLink.values.length < 5" class="fas fa-plus"></i>
                  <input v-model="form.wLink.value" type="text" placeholder="Link to your website" :disabled="form.wLink.values.length >= 5">
                  <div class="link-count">
                      <span>1 link(s) added <i class="fas fa-chevron-down" aria-hidden="true"></i></span>
                  </div>
                  <div class="link-list" style="display: none">
                    <span v-for="(value, index) in form.wLink.values" :key="index" class="error">{{value}}
                      <i @click="removeWLink(index)" class="fas fa-times"></i></span>
                  </div>
                </div>
                <div class="input-wrap-50">
                  <i @click="pushSLinks()" v-if="form.sLink.values.length < 5 && form.sLink.value" class="fas fa-plus"></i>
                  <i @click="pushSLinks()" class="fas fa-plus"></i>
                  <input v-model="form.sLink.value" type="text" placeholder="Link to social networks" :disabled="form.sLink.values.length >= 5">
                  <div class="link-count">
                      <span>1 link(s) added <i class="fas fa-chevron-down" aria-hidden="true"></i></span>
                  </div>
                  <div class="link-list" style="display: none">
                    <span v-for="(value, index) in form.sLink.values" :key="index" class="error">{{value}}
                      <i @click="removeSLinks(index)" class="fas fa-times"></i></span>
                  </div>
                </div>
                <div class="input-wrap-100 ">
                  <label for="">How’d you discover our services?</label>
                </div>
                <div class="checkboxes">
                  <div v-for="(value, index) in form.rLink.values" class="input-wrap-50" v-if="form.rLink.text !== value">
                    <span @click="relateCheck(index, value)" class="checkbox">
                      <i v-if="form.rLink.index === index" class="fas fa-check"></i>
                    </span><span>{{value}}</span>
                  </div>
                  <div v-else class="input-wrap-50">
                    <input v-model="form.rLink.value" type="text" placeholder="Other">
                    <span class="error">{{form.rLink.error}}</span>
                  </div>
                </div>
              </div>
              <!-------STEP 2---------->
              <div v-if="step === 2 " class="step-wrap" key="step2">
                <div class="input-wrap-50">
                  <input v-model="form.country.value" type="text" placeholder="Country*">
                  <span class="error">{{form.country.error}}</span>
                </div>
                <div class="input-wrap-50">
                  <div class="select" v-if="!form.bussinesNiche.text">
                    <p class="selected" @click="form.bussinesNiche.open = !form.bussinesNiche.open">
                      {{form.bussinesNiche.value}}
                      <i class="fas fa-chevron-down"></i></p>
                    <div v-if="form.bussinesNiche.open" class="options">
                      <p v-for="option in form.bussinesNiche.options" class="option" @click="setBussinesNiche(option)">{{option}}</p>
                    </div>
                  </div>
                  <input v-else v-model="form.bussinesNiche.value" type="text" placeholder="Other*">
                  <span class="error">{{form.bussinesNiche.error}}</span>
                </div>
                <div class="input-wrap-100 focus">
                  <textarea v-model="form.description.value" maxlength="150" rows="5" placeholder="Describe your bussines in short"></textarea>
                  <span class="error">{{form.description.error}}</span>
                </div>
                <div class="input-wrap-50">
                  <i @click="pushCompetitor()" v-if="form.competitor.values.length < 5 && form.competitor.value" class="fas fa-plus"></i>
                  <i @click="pushCompetitor()" class="fas fa-plus"></i>
                  <input v-model="form.competitor.value" type="text" placeholder="Link to social networks" :disabled="form.competitor.values.length >= 5">
                  <span class="error">
                    <span v-for="(value, index) in form.competitor.values" :key="index" class="error">{{value}}
                      <i @click="removeCompetitor(index)" class="fas fa-times"></i></span>
                  </span>
                </div>
              </div>
              <!-------STEP 3---------->
              <div v-if="step === 3 " class="step-wrap step-3" key="step3">
                <div class="input-wrap-50">
                  <div class="select">
                    <p class="selected" @click="form.services.open = !form.services.open">
                      {{form.services.value}}
                      <i class="fas fa-chevron-down"></i></p>
                    <div v-if="form.services.open" class="options">
                      <p v-for="option in form.services.options" class="option" @click="setServices(option)">{{option}}</p>
                    </div>
                  </div>
                  <span class="error">{{form.services.error}}</span>
                </div>
                <div class="input-wrap-50">
                  <div class="select">
                    <p class="selected" @click="form.delivery.open = !form.delivery.open">
                      {{form.delivery.value}}
                      <i class="fas fa-chevron-down"></i></p>
                    <div v-if="form.delivery.open" class="options">
                      <p v-for="option in form.delivery.options" class="option" @click="setDelivery(option)">{{option}}</p>
                    </div>
                  </div>
                  <span class="error">{{form.services.error}}</span>
                </div>
                <div class="input-wrap-50">
                  <div class="select">
                    <p class="selected" @click="form.budget.open = !form.budget.open">
                      {{form.budget.value}}
                      <i class="fas fa-chevron-down"></i></p>
                    <div v-if="form.budget.open" class="options">
                      <p v-for="option in form.budget.options" class="option" @click="setBudget(option)">{{option}}</p>
                    </div>
                  </div>
                  <span class="error">{{form.services.error}}</span>
                </div>
                <div class="input-wrap-100 ">
                  <textarea v-model="form.additional.value" maxlength="150" rows="5" placeholder="Anything we missed out?"></textarea>
                  <span class="error">{{form.additional.error}}</span>
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
          value: '',
          error: '',
          values: []
        },
        sLink: {
          value: '',
          error: '',
          values: []
        },
        rLink: {
          value: '',
          error: '',
          values: ['I Was Referred By A Friend', 'I Found You On Social Network', 'Google search', 'Other'],
          index: '',
          text: false
        },
        country: {
          value: '',
          error: ''
        },
        bussinesNiche: {
          options: ['Healtcare', 'Politics', 'Music', 'Education', 'Agroculture', 'IT', 'Non Profital', 'Ecology', 'Other'],
          value: 'Your Bussines Niche*',
          error: '',
          open: false,
          text: false
        },
        description: {
          value: '',
          error: ''
        },
        competitor: {
          value: '',
          error: '',
          values: []
        },
        services: {
          options: ['Web development', 'SEO', 'Social Media Marketing', 'Pay Per Click', 'Design', 'Link Building'],
          value: 'Service that you require*',
          error: '',
          open: false
        },
        delivery: {
          options: ['1 month', 'Minimum 3 months', 'Minimum 6 months', '1+ year'],
          value: 'Time-frame for project delivery*',
          error: '',
          open: false
        },
        budget: {
          options: ['< 1000$', '1000$ - 5000$', '5000$ - 10000$', '10000$ <'],
          value: 'What is the budget for your project?*',
          error: '',
          open: false
        },
        additional: {
          value: '',
          error: '',
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
    setBussinesNiche(value) {
      this.form.bussinesNiche.value = value;
      this.form.bussinesNiche.open = false;

      if (value === 'Other') {
        this.form.bussinesNiche.text = true;
      }

    },
    setServices(value) {
      this.form.services.value = value;
      this.form.services.open = false;
    },
    setDelivery(value) {
      this.form.delivery.value = value;
      this.form.delivery.open = false;
    },
    setBudget(value) {
      this.form.budget.value = value;
      this.form.budget.open = false;
    },
    relateCheck(index, input) {
      this.form.rLink.index = index;
      this.form.rLink.value = input;
      if (this.form.rLink.value === 'Other') {
        this.form.rLink.text = 'Other';
        this.form.rLink.value = '';
      } else {
        this.form.rLink.text = false;
      }
    },
    focusOut(fild) {
      this.validation(fild)
    },
    pushSLinks() {
      this.form.sLink.values.push(this.form.sLink.value);
      this.form.sLink.value = '';
    },
    removeSLinks(index) {
      this.form.sLink.values.splice(index, 1);

    },
    pushWLinks() {
      this.form.wLink.values.push(this.form.wLink.value);
      this.form.wLink.value = '';
    },
    removeWLink(index) {
      this.form.wLink.values.splice(index, 1);

    },
    pushCompetitor() {
      this.form.competitor.values.push(this.form.competitor.value);
      this.form.competitor.value = '';
    },
    removeCompetitor(index) {
      this.form.competitor.values.splice(index, 1);

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
