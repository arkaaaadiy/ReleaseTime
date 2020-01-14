<template>
  <div class="row form-registr">    
    <form class="col s12 m6" @submit.prevent="onSubmit">
    <h3>Registration</h3>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="text"               
          v-model.trim="email"          
          :class="$v.email.$error ? invalidClass : ''"
          @change="$v.email.$touch"
          />
          <label for="email">Email</label>
          <span class="helper-text" v-if="!$v.email.required" data-error="Email is required."></span>
          <span class="helper-text" v-if="!$v.email.email" data-error="Email is wrong."></span>
        </div>
        <div class="input-field col s12">
          <input id="password" type="password" 
          :class="$v.password.$error ? invalidClass : ''"
          @change="$v.password.$touch" 
          v-model.trim="password"/>
          <label for="password">Password</label>
          <span class="helper-text" v-if="!$v.password.required" data-error="Password is required."></span>
          <span class="helper-text" v-if="!$v.password.minLength" data-error="Password must have at least 6 letters">Password must have at least {{ $v.password.$params.minLength.min }} letters.</span>
        </div>
        <div class="input-field col s12">
          <input id="Rpassword" type="password"
          :class="$v.repeatPassword.$error ? invalidClass : ''"
          @change="$v.repeatPassword.$touch" 
          v-model="repeatPassword"/>
          <label for="Rpassword">Repeat password</label>
          <span class="helper-text" v-if="!$v.password.sameAsPassword" data-error="Passwords must be identical."></span>
        </div>
      </div>      
      <button class="btn" type="submit" name="action">
        <div v-if="loading">Loading...</div>
        <div v-else>Registration</div>
      </button>
      <p v-if="submitStatus === 'OK'">Thanks for your submission!</p>
      <p v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
      <p v-else>{{ submitStatus}}</p>

    </form>
  </div>  
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Registration",
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      submitStatus: null,
      invalidClass: 'invalid',
      validClass: 'valid'
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs("password")
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invaild){
        this.submitStatus = "ERROR"
      } else {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('registerUser', user)
          .then(()=> {
            let message = {
              context: 'success',
              title: 'You are register!'
            }
            this.$store.dispatсh('getMessage', message)
            this.$router.push('/')
          })
          .catch(err => {
            this.submitStatus = err.message
          })
      }
    },    
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
};
</script>

<style lang="css">
  .form-registr{
    margin-top: 50px;
  }
    
</style>

