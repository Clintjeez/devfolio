<template>
  <div id="profile">
    <div class="profile-wrapper">
      <h4>Welcome</h4>
      <h2 v-if="name">{{ name }}</h2>
      <hr>
      <p>You are a member of the devfolio community the top 10x engineers in the world.</p>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        price: '',
        long:'',
        comment: ''
      }
    },
    methods : {
      onSubmit () {
        const postData = {
          price: this.price,
          long: this.long,
          comment: this.comment
        }
        console.log(postData)
        this.$store.dispatch('postData', postData)
      }
    },
    computed: {
      name () {
        return !this.$store.getters.user ? false : this.$store.getters.user.name
      }
    },
    created () {
      this.$store.dispatch('fetchUser')
    }
  }
</script>
<style scoped>
  #profile{
    text-align: center;
    padding-top: 80px;
  }
  .profile-wrapper{
    max-width: 300px;
    padding: 20px 40px;
    margin: auto;
    background-color: #ffffff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    border-radius: 10px;
  }
  h2{
    font-size: 45px;
    color: #cc861d;
  }
</style>