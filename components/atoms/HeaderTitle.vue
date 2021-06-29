<template>
  <h1
    class="
      header-title
      text-center
      font-bold
      text-2xl text-gray-700
      font-heading
    "
  >
    {{ text }}
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: { type: String, required: true }
  }
})
</script>

<style lang="scss" scoped>
.header-title {
  margin: 0;
}
</style>
