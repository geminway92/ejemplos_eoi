<template>
  <FilterSentence
    title="Filtrador"
    filter="a"
    @filtered="showFiltered"
  />
</template>

<script>
import FilterSentence from './components/FilterSentence/FilterSentence.vue'

export default {
  name: 'App',
  components: {
    FilterSentence
  },
  methods: {
    showFiltered(e) {
      console.log('Filtrado: ' + e);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
