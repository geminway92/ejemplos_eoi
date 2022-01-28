<template>
  <div class="container">
    <FilterSentence title="Filtrador" filter="a" @filtered="showFiltered" />
    <ReverseFilter :filterResult="this.filterResult" />
  </div>
</template>

<script>
import FilterSentence from './components/FilterSentence/FilterSentence.vue'
import ReverseFilter from './components/ReverseFilter.vue'

export default {
  name: 'App',
  components: {
    FilterSentence,
    ReverseFilter,
  },
  data() {
    return {
      filterResult: '',
    }
  },
  methods: {
    showFiltered(e) {
      console.log('Filtrado: ' + e);
      this.filterResult = e;
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
