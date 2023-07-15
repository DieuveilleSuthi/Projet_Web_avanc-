<template>
  <div>
    <h2>Mon Panier</h2>
    <ul>
      <li v-for="article of panier.articles" :key="article.id">
        {{ find(article.id).name}} - {{ find(article.id).description }}
      </li>
    </ul>
    <button @click="pay" v-if="isConnected">Payer</button>
    <router-link to="/login" v-else>Se connecter pour payer</router-link>
  </div>
</template>

<script>
module.exports = {
  props: {
    articles: { type: Array, default: [] },
    panier: { type: Object },
    isConnected: { type: Boolean }
  },
  data () {
    return {
    }
  },
  async mounted () {
  },
  methods: {
    find (articleId) {
      return this.articles.find(article => article.id === articleId)
    },
    pay () {
      this.$emit('pay')
    }
  }
}
</script>

<style scoped>
</style>
