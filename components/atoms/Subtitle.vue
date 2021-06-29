<template>
  <div
    class="
      subtitle
      text-center
      font-medium
      text-sm text-gray-400
      font-subheading
    "
  >
    {{ text }}
  </div>
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
.subtitle {
  margin: 0;
}
</style>
