<template>
  <header id="header">
    <div class="logo">
      <router-link to="/">Devfolio</router-link>
    </div>
    <nav>
      <ul>
        <li v-if="!auth">
          <router-link to="/signup">Sign Up</router-link>
        </li>
        <li v-if="!auth">
          <router-link to="/signin">Sign In</router-link>
        </li>
        <li v-if="auth">
          <router-link to="/profile">Profile</router-link>
        </li>
        <li v-if="auth">
          <button @click="onLogout" class="logout">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    computed: {
      auth () {
        return this.$store.getters.isAuthenticated
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
      }
    }
    
  }
</script>

<style scoped>
  #header {
    height: 56px;
    width: 80vw;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #e0c178; 
    padding: 0 20px;
    margin: 0 auto 100px;
  }
  .logo {
    font-weight: bold;
    color: white;
  }
  .logo a {
    text-decoration: none;
    color: white;
  }
  nav {
    height: 100%;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }
  li {
    margin: 0 16px;
  }
  li a {
    text-decoration: none;
    color: white;
  }
  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #1e394e;
  }
  .logout {
    background-color: transparent;
    border: none;
    font: inherit;
    color: white;
    cursor: pointer;
  }
</style>