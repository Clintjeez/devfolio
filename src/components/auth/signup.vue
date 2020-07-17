<template>
  <div id="signup">
    <div id="signin">
     <div class="form">
           <form class="login-form" @submit.prevent="onSubmit">
          <div class="input" :class="{invalid: $v.email.$error}">
            <h6 v-if="!$v.email.email">Please provide a valid email address.</h6>
            <h6 v-if="!$v.email.unique">This email address has been taken.</h6>
            <h6 v-if="!$v.password.minLen">Please provide a valid password.</h6>
          <input
            type="email"
            placeholder="Email"
            id="email"
            @blur="$v.email.$touch()"
            v-model="email" required>
        </div>
         <div class="input">
          <input
            type="name"
            placeholder="name"
            id="name"
            v-model="name" required>
        </div>
        <div class="input" :class="{invalid: $v.password.$error}">
          <input
            type="password"
            placeholder="Password"
            id="password"
            @blur="$v.password.$touch()"
            v-model="password" required>
        </div>
        <div class="input" :class="{invalid: $v.confirmPassword.$error}">
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirm-password"
            @blur="$v.confirmPassword.$touch()"                 
            v-model="confirmPassword" required>
        </div>
          <button type="submit" :disabled="$v.invalid">create</button>
          <p class="message">Already registered? <router-link to="/signin">Sign In</router-link></p>
        </form> 
  </div>
  </div>
  </div>
</template>

<script>

import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
  import axios from 'axios'
export default {
    data () {
      return {
        email: '',
        name: '',
        age: null,
        password: '',
        confirmPassword: ''
      }
    },
     methods : {
       onSubmit () {
        const signupData = {
          name:this.name,
          email: this.email,
          password: this.password,
          confirmPassword : this.confimPassword
        }
        
        this.$store.dispatch('signup', signupData)
      }
     },
     validations: {
      email: {
        required,
        email,
        unique: val => {
          if (val === '') return true
          return axios.get('https://vue-devfolio.firebaseio.com/users.json?orderBy="email"&equalTo="' + val + '"')
            .then(res => {
              return Object.keys(res.data).length === 0
            })
        }
      },
      password: {
        required,
        minLen: minLength(6)
      },
      confirmPassword: {
          required,
//        sameAs: sameAs('password')
        sameAs: sameAs(vm => {
          return vm.password
        })
      }
    }
}
</script>