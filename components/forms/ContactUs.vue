<template>
  <div class="contact-us-form">
    <div class="form-wrap">
      <h3>Write to us,chackeErrors
        don’t be shy <span class="text-red">!</span></h3>
      <form>
        <div class="input-wrap-50 focus">
          <input v-model="form.name.value" @blur="focusOut('name')" @keyup="focusOut('name')" type="text" placeholder="Your Name*">
          <span class="error">{{form.name.error}}</span>
        </div>
        <div class="input-wrap-50 focus">
          <input v-model="form.email.value" @blur="focusOut('email')" @keyup="focusOut('email')" type="email" placeholder="Email*">
          <span class="error">{{form.email.error}}</span>
        </div>
        <div class="input-wrap-100 focus">
          <textarea v-model="form.message.value" @blur="focusOut('message')" @keyup="focusOut('message')" rows="10" placeholder="Your Message*"></textarea>
          <span class="error">{{form.message.error}}</span>
        </div>
      </form>
      <div class="red-btn" :class="{unactiv: chackeErrors}">
        <p>SUBMIT</p>
        <img src="@/assets/img/arrow-right.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactUs',
  data() {
    return {
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
 
    validateEmail(email){
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                
                return re.test(email);
    },
  
  },
  computed:{
    chackeErrors(){
      return Object.values(this.form).filter(item => item.error !== '').length;
    }
  }


};

</script>
