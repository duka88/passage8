<template>
  <div class="get-qout">
    <p @click="openPop()" class="triger">GET A QUOTE</p>
    <transition name="slide-fade">
      <div v-if="open" class="contact-us-form">
        <div class="form-wrap">
          <i @click="openPop()" class="fas fa-times close"></i>
          <h3>GET A QUOTE<span class="text-red">.</span></h3>
          <div class="info-wrap">
            <p :class="[step >= 1 ? 'done' : '']">General information</p>
            <p :class="[step >= 2 ? 'done' : '']">Tell us about yourself</p>
            <p :class="[step === 3 ? 'done' : '']">Aditional Information</p>
          </div>
          <div class="border" :class="{width33: step === 1, width66: step === 2, width100: step === 3}"></div>
          <form>
            <!-------STEP 1---------->
            <transition name="fade" mode="out-in">
              <div v-if="step === 1 " class="step-wrap" key="step1">
                <div class="input-wrap-50 ">
                  <input v-model="form.name.value" @blur="focusOut('name')" @focus="form.name.error = ''
          " type="text" placeholder="Name*">
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
                  <i @click="pushWLinks()" v-if="form.wLink.values.length < 3 && form.wLink.value" class="fas fa-plus"></i>
                  <input v-model="form.wLink.value" type="text" placeholder="Link to your website" :disabled="form.wLink.values.length >= 3">
                  <div class="link-count">
                    <span v-if="form.wLink.values.length > 0" @click="form.wLink.list = !form.wLink.list">
                      {{form.wLink.values.length}} link(s) added <i class="fas fa-chevron-down" aria-hidden="true"></i></span>
                  </div>
                  <div class="link-list" v-if="form.wLink.list">
                    <span v-for="(value, index) in form.wLink.values" :key="index" class="error">{{value}}
                      <i @click="removeWLink(index)" class="fas fa-times"></i></span>
                  </div>
                </div>
                <div class="input-wrap-50">
                  <i @click="pushSLinks()" v-if="form.sLink.values.length < 3 && form.sLink.value" class="fas fa-plus"></i>
                  <input v-model="form.sLink.value" type="text" placeholder="Link to social networks" :disabled="form.sLink.values.length >= 3">
                  <div class="link-count">
                    <span v-if="form.sLink.values.length > 0" @click="form.sLink.list = !form.sLink.list">
                      {{form.sLink.values.length}} link(s) added <i class="fas fa-chevron-down" aria-hidden="true"></i></span>
                  </div>
                  <div class="link-list" v-if="form.sLink.list">
                    <span v-for="(value, index) in form.sLink.values" :key="index" class="error">{{value}}
                      <i @click="removeSLinks(index)" class="fas fa-times"></i></span>
                  </div>
                </div>
              </div>
              <!-------STEP 2---------->
              <div v-if="step === 2 " class="step-wrap" key="step2">
                <div class="input-wrap-50">
                  <div class="select">
                    <p class="selected" @click="form.goal.open = !form.goal.open">
                      {{form.goal.value}}
                      <i class="fas fa-chevron-down"></i></p>
                    <div v-if="form.goal.open" class="options">
                      <p v-for="option in form.goal.options" class="option" @click="setGoal(option)">{{option}}</p>
                    </div>
                  </div>
                  <span class="error">{{form.goal.error}}</span>
                </div>
                <div class="input-wrap-50">
                  <div class="select">
                    <p class="selected" @click="form.socialPref.open = !form.socialPref.open">
                      {{form.socialPref.value}}
                      <i class="fas fa-chevron-down"></i></p>
                    <div v-if="form.socialPref.open" class="options">
                      <p v-for="option in form.socialPref.options" class="option" @click="setSocialPref(option)">{{option}}</p>
                    </div>
                  </div>
                  <span class="error">{{form.socialPref.error}}</span>
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
                <div class="input-wrap-100 focus row-span-2">
                  <textarea v-model="form.description.value" maxlength="150" rows="5" placeholder="Describe your bussines in short"></textarea>
                  <span class="error">{{form.description.error}}</span>
                </div>
              </div>
              <!-------STEP 3---------->
              <div v-if="step === 3 " class="step-wrap step-3" key="step3">
                <div class="input-wrap-50">
                  <div class="select">
                    <p class="selected" @click="form.budget.open = !form.budget.open">
                      {{form.budget.value}}
                      <i class="fas fa-chevron-down"></i></p>
                    <div v-if="form.budget.open" class="options">
                      <p v-for="option in form.budget.options" class="option" @click="setBudget(option)">{{option}}</p>
                    </div>
                  </div>
                  <span class="error">{{form.budget.error}}</span>
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
                  <span class="error">{{form.delivery.error}}</span>
                </div>
                <div class="input-wrap-100 ">
                  <textarea v-model="form.additional.value" maxlength="150" rows="5" placeholder="Anything we missed out?"></textarea>
                  <span class="error">{{form.additional.error}}</span>
                </div>
              </div>
            </transition>
          </form>
          <div class="button-wrap">
            <div v-if="step > 1" @click="step--" class="red-btn">
              PREVIUS
            </div>
            <div v-if="step < 3" @click="nextStep()" class="red-btn" :class="{unactiv: chackeErrors}">
              NEXT
            </div>
            <div v-if="step === 3" @click="submit()" class="red-btn" :class="{unactiv: chackeErrors}">
              <div v-if="loader" class="loader">Loading...</div>
              <span v-if="!loader">SUBMIT</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'SMForm',
  data() {
    return {
      step: 1,
      open: false,
      message: false,
      loader: false,
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
          values: [],
          list: false
        },
        sLink: {
          value: '',
          error: '',
          values: [],
          list: false
        },
        goal: {
          options: ['More followers', 'More engagement', 'Generate Revenue', 'Build Brand Awareness'],
          value: 'What is your goal?',
          error: '',
          open: false
        },
        socialPref: {
          options: ['Facebook', 'Instagram', 'LinkedIn', 'Pinterest'],
          value: 'Prefered Social Media Network?',
          error: '',
          open: false
        },
        bussinesNiche: {
          options: ['Healtcare', 'Politics', 'Music', 'Education', 'Agroculture', 'IT', 'Non Profital', 'Ecology', 'Other'],
          value: 'Your Bussines Niche*',
          error: '',
          open: false,
          text: false
        },
        delivery: {
          options: ['1 month', 'Minimum 3 months', 'Minimum 6 months', '1+ year'],
          value: 'Time-frame for project delivery*',
          error: '',
          open: false
        },
        description: {
          value: '',
          error: ''
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
    nextStep() {

      if (this.step === 1) {
        this.step1Validation();

      } else {
         this.step2Validation();
      }

      if (this.chackeErrors === 0) {
        this.step++;
      }
    },
    messageSet(msg) {

      this.message = msg;
      setTimeout(() => {

        this.message = false


      }, 2000);

    },
    submit() {
      this.step3Validation();

      if (this.chackeErrors === 0 && !this.loader) {
        this.loader = true;
        this.$axios.post('send-mail', {
            mail: {
              fromPage: 'Social Media',
              Name: this.form.name.value,
              Email: this.form.email.value,
              CompanyName: this.form.cName.value,
              WebsiteLink: this.form.wLink.value ? this.form.wLink.value : this.form.wLink.values,
              SocialLinks: this.form.sLink.value ? this.form.sLink.value : this.form.sLink.values,
              BussinesNiche: this.form.bussinesNiche.value,
              BussinesDescribtion: this.form.description.value,
              SocialMediaPreferencs: this.form.socialPref.value,
              Goal: this.form.goal.value,
              Delivery: this.form.delivery.value,
              Budget: this.form.budget.value,
              Additional: this.form.additional.value
            }
          })
          .then(() => {
            this.messageSet('Message sent successfully!');
            this.loader = false;
            this.resetForm();
          })
          .catch(() => {
            this.messageSet('Somethig went wrong');
            this.loader = false;
            this.resetForm();
          })
      }
    },
    resetForm() {
      Object.values(this.form).forEach((item) => {
        item.value = '';
        if (item.values) {
          item.values = []
        }
      });
      this.step = 1;
    },
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
    setDelivery(value) {
      this.form.delivery.value = value;
      this.form.delivery.open = false;
    },
    setGoal(value) {
      this.form.goal.value = value;
      this.form.goal.open = false;
    },
    setSocialPref(value) {
      this.form.socialPref.value = value;
      this.form.socialPref.open = false;
    },
    setBudget(value) {
      this.form.budget.value = value;
      this.form.budget.open = false;
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
    step1Validation() {

      if (this.form.email.value === '') {
        this.form.email.error = 'Email is required!'
      } else if (!this.validateEmail(this.form.email.value)) {
        this.form.email.error = 'Value must be a email!'
      } else {
        this.form.email.error = ''
      }
      if (!this.form.name.value) {
        this.form.name.error = 'Name is required!'
      } else {
        this.form.name.error = ''
      }



    },
    step2Validation() {
      if (this.form.goal.value === "What is your goal?") {
        this.form.goal.error = 'Pleas select you goal!'
      } else {
        this.form.goal.error = ''
      }
      if (this.form.socialPref.value === "Prefered Social Media Network?") {
        this.form.socialPref.error = 'Pleas select you social prefrence!'
      } else {
        this.form.socialPref.error = ''
      }
      if (!this.form.bussinesNiche.value || this.form.bussinesNiche.value === 'Your Bussines Niche*') {
        this.form.bussinesNiche.error = 'Bussines Niche is required!'
      } else {
        this.form.bussinesNiche.error = ''
      }
    },
    step3Validation() {
      if (!this.form.budget.value || this.form.budget.value === 'What is the budget for your project?*') {
        this.form.budget.error = 'Please set budget'
      } else {
        this.form.budget.error = ''
      }
      if (!this.form.delivery.value || this.form.delivery.value === 'Time-frame for project delivery*') {
        this.form.delivery.error = 'Please set delivery Time-frame'
      } else {
        this.form.delivery.error = ''
      }

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
      } else if (fild === 'name') {
        if (!this.form.name.value) {
          this.form.name.error = 'Name is required!'
        } else {
          this.form.name.error = ''
        }
      } else if (fild === 'competitor') {
        if (!this.form.competitor.value && this.form.competitor.values.length === 0) {
          this.form.competitor.error = 'Competitor name is required!'
        } else {
          this.form.competitor.error = ''
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
