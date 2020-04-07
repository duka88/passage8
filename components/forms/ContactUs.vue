<template>
  <div class="contact-us-form">
    <div id="contact" class="form-wrap">
      <h3>Write to us,chackeErrors
        don’t be shy <span class="text-red">!</span></h3>
      <form>
        <div class="input-wrap-50 focus">
          <input v-model="form.name.value" @blur="focusOut('name')" @focus="form.name.error = ''
          " type="text" placeholder="Your Name*">
          <span class="error">{{form.name.error}}</span>
        </div>
        <div class="input-wrap-50 focus">
          <input v-model="form.email.value" @blur="focusOut('email')" @focus="form.email.error = ''" type="email" placeholder="Email*">
          <span class="error">{{form.email.error}}</span>
        </div>
        <div class="input-wrap-100 focus">
          <textarea v-model="form.message.value" @blur="focusOut('message')" @focus="form.message.error = ''" rows="10" placeholder="Your Message*"></textarea>
          <span class="error">{{form.message.error}}</span>
        </div>
      </form>
      <transition name="fade" mode="out-in">
        <div v-if="message" class="red-btn" key="1">
          <p>{{message}}</p>
        </div>
        <div v-else @click="submit()" class="red-btn" :class="{unactiv: chackeErrors}" key="2">
          <div v-if="loader" class="loader">Loading...</div>
          <p v-if="!loader">SUBMIT</p>
          <img v-if="!loader" src="@/assets/img/arrow-right.png" alt="">
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      loader: false,
      message: false,
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
    submit() {
      if (!this.chackeErrors && !this.loader) {
        this.loader = true;
        this.$axios.post('send-mail', {
            mail: {
              name: this.form.name.value,
              email: this.form.email.value,
              message: this.form.message.value,
            }
          })
          .then(() => {
            this.messageSet('Message sent successfully!');
            this.loader = false;
            this.resetForm();

          })
          .catch(()=>{
            this.messageSet('Somethig went wrong');
            this.loader = false;
            this.resetForm();
          })
      }
    },
    messageSet(msg) {

      this.message = msg;
      setTimeout(() => {

        this.message = false


      }, 2000);

    },
    resetForm() {
      this.form.name.value = '';
      this.form.email.value = '';
      this.form.message.value = '';
    },
    resetError() {
      this.form.name.error = '';
      this.form.email.error = '';
      this.form.message.error = '';
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
