<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="createUser()">
      <input v-model="email" placeholder="email">
      <input
      type="password" v-model="password"
      placeholder="password"
      >
      <button type="submit">Se crée r un compte</button>
    </form>
  </div>
</template>

<script>
module.exports = {
  props: {
    articles: { type: Array, default: [] },
    panier: { type: Object }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  async mounted () {
  },
  methods: {
    async createUser() {
      await axios.post('/api/register', {
        email: this.email,
        password: this.password
      })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>
