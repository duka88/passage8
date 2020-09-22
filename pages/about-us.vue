<template>
  <div style="height: 100vh">
    <form ref="form">
      <input type="text" v-model="form.text">
      <input type="file" @change="files($event)">
        <button @click="submit($event)">Submit</button>
        <ProgresBar v-if="submiting" :width="width" />
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
import ProgresBar from '@/components/ProgresBar';
export default {
  components: {
    ProgresBar
  },
  head() {
    return {
      title: 'About Us | Passage 8',

    }
  },
  data() {
    return {
      form: {
           text: '',
           file: '',         
      },   
       submiting: false,  
      width: 0
    }
  },
  methods: {
    files(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
          reader.onload = (e) => {
                this.form.file = e.target.result;
            };
            reader.readAsDataURL(file);
    },
    resetForm(form) {
      const newForm = {}     
      Object.keys(form).forEach(key => {
           newForm[key] = ""
        });
      return newForm;  
    },
    submit(e) {
      e.preventDefault();
       if(!this.submiting) {
         this.submiting = true;
            const config = {
                onUploadProgress: (progressEvent) => {
                 this.width = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                }
            }
            const data = {mail: {
              name: this.form.text,
              file: this.form.file
            },}
           this.$axios.post('send-mail', data, config )
          .then((response) => {
            console.log(response)
            this.form = this.resetForm(this.form);
            this.$refs.form.reset();     
            this.width = 0;
            this.submiting = false;
          })
          .catch((err)=>{
            console.log(err)
        
          })
      } 
    }  
  },
  mounted() {

  }

};

</script>
