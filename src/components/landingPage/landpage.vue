<template>
  <div id="welcome">
    <h1>The top dev community </h1>
    <p>Be part of a community of professional 10x software engineers</p>
    <div class="cta">
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signin">Sign In</router-link>
    </div>
  </div>
</template>

<style scoped>
  #welcome {
    width: 80%;
    margin: auto;
  }
  h1 {
    text-align: center;
    font-size: 60px;
    margin-top: 160px;
  }
  p {
    text-align: center;
  }
  .cta {
    width: 300px;
    margin: auto;
    text-align: center;
  }
  .cta a {
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid #1e394e;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
    color: #1e394e;
  }
  .cta a:hover,
  .cta a:active {
    background-color: #1e394e;
    color: white;
  }
</style>