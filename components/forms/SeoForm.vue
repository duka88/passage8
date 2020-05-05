<template>
  <div class="get-qout">
    <p @click="openPop()" class="triger">GET A QUOTE</p>
    <transition name="slide-fade">
      <div v-if="open" class="contact-us-form">
        <div class="form-wrap">
          <i @click="openPop()" class="fas fa-times close"></i>
          <h3>GET A QUOTE<span class="text-red">.</span></h3>
          <div class="info-wrap">
            <p class="done">Request an audit</p>
            
          </div>
          <div class="border width100"></div>
          <form>       
          
              <div class="step-wrap" >
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
                
            
              </div>             
          
     
     
          </form>
          <div class="button-wrap">
          
            <div @click="submit()" class="red-btn" :class="{unactiv: chackeErrors}">
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
 name: 'SeoForm',
  data() {
    return {    
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
        }
    
      },
    }
  },
  methods: {

    messageSet(msg) {

      this.message = msg;
      setTimeout(() => {

        this.message = false


      }, 2000);

    },
    submit() {
      this.step1Validation();

      if (this.chackeErrors === 0 && !this.loader) {
        this.loader = true;
        this.$axios.post('send-mail', {
            mail: {
              fromPage: 'SEO',
              Name: this.form.name.value,
              CompanyName: this.form.cName.value,
              WebsiteLink: this.form.wLink.value ? this.form.wLink.value : this.form.wLink.values,             
              Email: this.form.email.value
              
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
     focusOut(fild) {
      this.validation(fild)
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
