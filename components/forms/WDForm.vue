<template>
  <div class="get-qout">
    <p @click="openPop()" class="triger">GET A QUOTE</p>
    <transition name="slide-fade">
      <div v-if="open" class="contact-us-form">
        <div class="form-wrap">
          <i @click="openPop()" class="fas fa-times close"></i>
          <h3>GET A QUOTE<span class="text-red">.</span></h3>
          <div class="info-wrap">
            <p :class="[step >= 1 ? 'done' : '']">General Information</p>
            <p :class="[step >= 2 ? 'done' : '']">Tehnical details</p>
            <p :class="[step === 3 ? 'done' : '']">Aditional information</p>
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
                  <input v-model="form.country.value" type="text" placeholder="Country*" @blur="focusOut('country')" @focus="form.country.error = ''">
                  <span class="error">{{form.country.error}}</span>
                </div>
              </div>
              <!-------STEP 2---------->
              <div v-if="step === 2 " class="step-wrap" key="step2">
                <div class="input-wrap-100">
                  <label for="">Do you have a registered domain?</label>
                  <div class="checkboxes">
                    <div v-for="(value, index) in form.rDomani.options" class="input-wrap-50" v-if="form.rDomani.text !== value">
                      <span @click="domaniCheck(index, value)" class="checkbox">
                        <i v-if="form.rDomani.index === index" class="fas fa-check"></i>
                      </span><span>{{value}}</span>
                    </div>
                    <div v-else class="input-wrap-50">
                      <input v-model="form.rDomani.value" type="text" placeholder="Enter domain name*" @focus="form.rDomani.error = ''">
                    </div>
                    <span class="error">{{form.rDomani.error}}</span>
                  </div>
                </div>
                <div class="input-wrap-50 ">
                  <input v-model="form.customer.value" type="text" placeholder="Who is your ideal customer?*" @blur="focusOut('customer')" @focus="form.customer.error = ''">
                  <span class="error">{{form.customer.error}}</span>
                </div>
                <div class="input-wrap-50 ">
                  <input v-model="form.goal.value" type="text" placeholder="Who is the goal you want to achive?">
                  <span class="error">{{form.goal.error}}</span>
                </div>
                <div class="input-wrap-50">
                  <i @click="pushCompetitor()" v-if="form.competitor.values.length < 3 && form.competitor.value" class="fas fa-plus"></i>
                  <input v-model="form.competitor.value" type="text" placeholder="Your main competitors*" :disabled="form.competitor.values.length >= 3" @blur="focusOut('competitor')" @focus="form.competitor.error = ''">
                  <span class="error">{{form.competitor.error}}</span>
                  <div class="link-count">
                    <span v-if="form.competitor.values.length > 0" @click="form.competitor.list = !form.competitor.list">
                      {{form.competitor.values.length}} link(s) added <i class="fas fa-chevron-down" aria-hidden="true"></i></span>
                  </div>
                  <div class="link-list" v-if="form.competitor.list">
                    <span v-for="(value, index) in form.competitor.values" :key="index" class="error">{{value}}
                      <i @click="removeCompetitor(index)" class="fas fa-times"></i></span>
                  </div>
                </div>
                <div class="input-wrap-50">
                  <i @click="pushLanguage()" v-if="form.languages.values.length < 5 && form.languages.value" class="fas fa-plus"></i>
                  <input v-model="form.languages.value" type="text" placeholder="Language(s)*" :disabled="form.languages.values.length >= 5" @blur="focusOut('language')" @focus="form.languages.error = ''">
                  <span class="error">{{form.languages.error}}</span>
                  <div class="link-count">
                    <span v-if="form.languages.values.length > 0" @click="form.languages.list = !form.languages.list">
                      {{form.languages.values.length}} link(s) added <i class="fas fa-chevron-down" aria-hidden="true"></i></span>
                  </div>
                  <div class="link-list" v-if="form.languages.list">
                    <span v-for="(value, index) in form.languages.values" :key="index" class="error">{{value}}
                      <i @click="removeLanguage(index)" class="fas fa-times"></i></span>
                  </div>
                </div>
                <div class="input-wrap-100 ">
                  <label for="">Will the website sell products?</label>
                  <div class="checkboxes">
                    <div v-for="(value, index) in form.product.options" class="input-wrap-50" v-if="form.product.text !== value">
                      <span @click="productCheck(index, value)" class="checkbox">
                        <i v-if="form.product.index === index" class="fas fa-check"></i>
                      </span><span>{{value}}</span>
                    </div>
                    <div v-else class="input-wrap-50">
                      <input v-model="form.product.value" type="number" placeholder="Num of products*" min="1">
                    </div>
                    <span class="error">{{form.product.error}}</span>
                  </div>
                </div>
              </div>
              <!-------STEP 3---------->
              <div v-if="step === 3 " class="step-wrap step-3" key="step3">
                <div class="input-wrap-100 ">
                  <label for="">Do you have content(images, text, ect)?</label>
                  <div class="checkboxes">
                    <div v-for="(value, index) in form.content.options" class="input-wrap-50">
                      <span @click="contentCheck(index, value)" class="checkbox">
                        <i v-if="form.content.index === index" class="fas fa-check"></i>
                      </span><span>{{value}}</span>
                    </div>
                    <span class="error">{{form.content.error}}</span>
                  </div>
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
                <div class="input-wrap-100 row-span-2">
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
  name: 'WDForm',
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
        country: {
          value: '',
          error: ''
        },
        wLink: {
          value: '',
          error: '',
          values: [],
          list: false
        },
        rDomani: {
          value: '',
          error: '',
          options: ['Yes', 'No'],
          index: '',
          text: false,
        },
        product: {
          value: '',
          error: '',
          options: ['Yes', 'No'],
          index: '',
          text: false,
        },
        content: {
          value: '',
          error: '',
          options: ['Yes', 'No'],
          index: ''
        },
        customer: {
          value: '',
          error: ''
        },
        goal: {
          value: '',
          error: ''
        },
        competitor: {
          value: '',
          error: '',
          values: [],
          list: false
        },
        languages: {
          value: '',
          error: '',
          values: [],
          list: false
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
    nextStep() {

      if (this.step === 1 || this.step === 2) {
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
              fromPage: 'Web Development',
              Name: this.form.name.value,
              Email: this.form.email.value,
              CompanyName: this.form.cName.value,
              Country: this.form.country.value,
              Domain: this.form.rDomani.value,
              Customer: this.form.customer.value,
              Goals:  this.form.goal.value,
              Competitors: this.form.competitor.value ? this.form.competitor.value : this.form.competitor.values,
              Language:  this.form.languages.value ? this.form.languages.value : this.form.languages.values,           
              Content: this.form.content.value,
              TimeFrame: this.form.delivery.value,
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

    setDelivery(value) {
      this.form.delivery.value = value;
      this.form.delivery.open = false;
    },
    setBudget(value) {
      this.form.budget.value = value;
      this.form.budget.open = false;
    },
    domaniCheck(index, input) {
      this.form.rDomani.index = index;
      this.form.rDomani.value = input;
      if (this.form.rDomani.value === 'Yes') {
        this.form.rDomani.text = 'Yes';
        this.form.rDomani.value = '';
      } else {
        this.form.rDomani.text = false;
      }
      this.form.rDomani.error = '';
    },
    contentCheck(index, input) {
      this.form.content.index = index;
      this.form.content.value = input;
      this.form.content.error = '';
    },
    productCheck(index, input) {
      this.form.product.index = index;
      this.form.product.value = input;
      if (this.form.product.value === 'Yes') {
        this.form.product.text = 'Yes';
        this.form.product.value = '';
      } else {
        this.form.product.text = false;
      }
      this.form.product.error = '';
    },
    focusOut(fild) {
      this.validation(fild)
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
    pushLanguage() {
      this.form.languages.values.push(this.form.languages.value);
      this.form.languages.value = '';
    },
    removeLanguage(index) {
      this.form.languages.values.splice(index, 1);

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
      if (!this.form.country.value) {
        this.form.country.error = 'Country name is required!'
      } else {
        this.form.country.error = ''
      }


    },
    step2Validation() {
      if (!this.form.rDomani.value) {
        this.form.rDomani.error = 'This fied is required!'
      } else {
        this.form.rDomani.error = ''
      }
      if (!this.form.competitor.value && this.form.competitor.values.length === 0) {
        this.form.competitor.error = 'Competitor name is required!'
      } else {
        this.form.competitor.error = ''
      }

      if (!this.form.languages.value && this.form.languages.values.length === 0) {
        this.form.languages.error = 'Enter at least one language!'
      } else {
        this.form.languages.error = ''
      }

      if (!this.form.product.value) {
        this.form.product.error = 'This fied is required!'
      } else if (this.form.product.value < 1) {
        this.form.product.error = 'Product number must be greater than 0!'
      } else {
        this.form.product.error = ''
      }

    },
    step3Validation() {
      if (!this.form.budget.value || this.form.budget.value === 'What is the budget for your project?*') {
        this.form.budget.error = 'Please set budget!'
      } else {
        this.form.budget.error = ''
      }
      if (!this.form.delivery.value || this.form.delivery.value === 'Time-frame for project delivery*') {
        this.form.delivery.error = 'Please set delivery Time-frame!'
      } else {
        this.form.delivery.error = ''
      }
      if (!this.form.content.value) {
        this.form.content.error = 'This fild is required!'
      } else {
        this.form.content.error = ''
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
      } else if (fild === 'customer') {
        if (!this.form.customer.value) {
          this.form.customer.error = 'Customer name is required!'
        } else {
          this.form.customer.error = ''
        }
      } else if (fild === 'competitor') {
        if (!this.form.competitor.value && this.form.competitor.values.length === 0) {
          this.form.competitor.error = 'Competitor name is required!'
        } else {
          this.form.competitor.error = ''
        }
      } else if (fild === 'language') {
        if (!this.form.languages.value && this.form.languages.values.length === 0) {
          this.form.languages.error = 'Enter at least one language!'
        } else {
          this.form.languages.error = ''
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
