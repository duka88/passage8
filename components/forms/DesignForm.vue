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
                <div class="input-wrap-100 row-span-2">
                  <label for="">I need</label>
                  <div class="checkboxes ">
                    <div v-for="value in form.needs.options" class="input-wrap-50" >
                      <span @click="needsCheck(value)" class="checkbox">
                        <i v-if="form.needs.value.includes(value)" class="fas fa-check"></i>
                      </span><span>{{value}}</span>
                    </div>
                    <span class="error">{{form.needs.error}}</span>
                  </div>
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
  name: 'DesignForm',
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
        needs: {
          options: ['Logo Design', 'Landing Page Design', 'Graphic design', 'Website Wireframe', 'Website Mockup Design'],
          value: [],
          error: ''        
        },
        description: {
          value: '',
          error: ''
        },
        competitor: {
          value: '',
          error: '',
          values: [],
          list: false
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
              fromPage: 'Design',
              Name: this.form.name.value,
              Email: this.form.email.value,
              CompanyName: this.form.cName.value,
              WebsiteLink: this.form.wLink.value ? this.form.wLink.value : this.form.wLink.values,
              SocialLinks: this.form.sLink.value ? this.form.sLink.value : this.form.sLink.values,
              BussinesNiche: this.form.bussinesNiche.value,             
              BussinesDescribtion: this.form.description.value,
              Competitors: this.form.competitor.value ? this.form.competitor.value : this.form.competitor.values,
              Needs: this.form.needs.value,             
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
   needsCheck(value) {
   
    if(this.form.needs.value.includes(value)){
        let i = this.form.needs.value.indexOf(value);
        this.form.needs.value.splice(i, 1);
    }else{
      this.form.needs.value.push(value);
    }
   
    
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
    pushCompetitor() {
      this.form.competitor.values.push(this.form.competitor.value);
      this.form.competitor.value = '';
    },
    removeCompetitor(index) {
      this.form.competitor.values.splice(index, 1);

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
      if (this.form.needs.value.length < 1) {
        this.form.needs.error = 'Select at least one option!'
      } else {
        this.form.needs.error = ''
      }
      if (!this.form.competitor.value && this.form.competitor.values.length === 0) {
        this.form.competitor.error = 'Competitor name is required!'
      } else {
        this.form.competitor.error = ''
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
      }  else if (fild === 'name') {
        if (!this.form.name.value) {
          this.form.name.error = 'Name is required!'
        } else {
          this.form.name.error = ''
        }
      }else if (fild === 'competitor') {
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
