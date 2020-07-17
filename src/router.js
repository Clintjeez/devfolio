import Vue from 'vue'
import VueRouter from 'vue-router'



import landingPage from './components/landingPage/landpage.vue'
import profile from './components/profile/profile.vue'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'
import store from './store'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: landingPage },
  { path: '/signup', component: SignupPage },
  { path: '/signin', component: SigninPage },
  {
    path: '/profile',
    component: profile,
    beforeEnter (to, from, next){
      if(store.state.idToken) {
        next()
      }else{
        next('/signin')
      }
    }
    
  }
]

export default new VueRouter({mode: 'history', routes})