<template>
  <div class="get-qout">
    <p @click="open = !open">GET A QUOTE</p>
    <transition name="slide-fade">
      <div v-if="open" class="contact-us-form">
        <div class="form-wrap">
          <h3>GET A QUOTE<span class="text-red">.</span></h3>
          <div class="info-wrap">
            <p :class="[step >= 1 ? 'done' : '']">Personal Information</p>
            <p :class="[step >= 2 ? 'done' : '']">Services</p>
            <p :class="[step === 3 ? 'done' : '']">Goals</p>
          </div>
          <div class="border" :class="{width33: step === 1, width66: step === 2, width100: step === 3}"></div>
          <form>
            <!-------STEP 1---------->
            <transition name="fade" mode="out-in" >
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
                <div class="input-wrap-100 ">
                  <label for="">How did you discover our services?</label>
                </div>
                <div class="input-wrap-50 ">
                  <span class="checkbox">
                    <i class="fas fa-check"></i>
                  </span>
                  <span>I found you by Google search</span>
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
export default {
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
        message: {
          value: '',
          error: ''
        }
      },
    }
  },
  methods: {
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
