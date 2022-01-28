<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div>
      <input
        id="originalSentence"
        name="originalSentence"
        type="text"
        :maxlength="maxLength"
        :size="size"
        :placeholder="placeHolder"
        @input="filterSentence"
      />
    </div>
    <div>
      <label>{{ filtered }}</label>
    </div>
  </div>
</template>

<script>
/**
 * Este componente tiene una funcionalidad simple de filtrado de texto
 * en base a un patrón dado. Se usa como ejemplo para aprender el uso
 * de <a href="https://storybook.js.org/docs/vue/get-started/introduction">Storybook</a>
 * @emits filtered
 */
export default {
  name: 'FilterSentence',
  emits: ['filtered'],
  props: {
    /** Título adjunto al input. Es opcional.
      * @public
      */
    title: {
      type: String,
      default: '',
    },
    /** Palabra que se usará como patrón para el filtro
     * @public
     */
    filter: {
      type: String,
      default: '',
    },
    /**  */
    size: {
      type: Number,
      default: 32,
    },
    maxLength: {
      type: Number,
      default: 64,
    },
    placeHolder: {
      type: String,
      default: 'Escribe cualquier cosa para que pase el filtro',
    },
  },
  data() {
    return {
      filtered: '',
    };
  },
  methods: {
    filterSentence(e) {
      const splitedSentence = e.target.value.split(this.filter);
      this.filtered = '';
      for (const part of splitedSentence) {
        this.filtered += part;
      }
      this.$emit('filtered', this.filtered);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
