<template>
  <div v-if="filterResult !== 'undefined'">
    <label>{{ filterResult }}</label>
    <br />
    <label id="revert-comp">{{ revertComp }}</label>
  </div>
</template>

<script>
export default {
  props: {
    filterResult: {
      type: String,
      default: ''
    }
  },

  computed: {
    revertComp() {
      return this.filterResult.split('').reverse().join('')
    }
  }
}
</script>;


<style>
</style>
