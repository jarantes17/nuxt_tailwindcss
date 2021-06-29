<template>
  <div class="login-template">
    <div class="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
      <div
        class="
          col-span-1
          bg-gray-50
          flex flex-col
          justify-center
          items-center
          -mt-36
          p-5
        "
      >
        <LoginHeader
          class="
            max-w-md
            w-full
            mx-auto
            flex flex-col
            justify-center
            items-center
          "
        />
        <LoginForm
          class="max-w-md w-full mx-auto mt-4 bg-white p-8 shadow-md"
        />
      </div>
      <div class="lg:col-span-2 lg:block hidden bg-gray-600"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.login-template {
  margin: 0;
}
</style>
