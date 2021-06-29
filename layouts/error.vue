<template>
  <div
    class="
      error-layout
      grid grid-flow-row
      justify-center
      content-center
      justify-items-center
      gap-16
    "
  >
    <img src="@/assets/images/404.svg" alt="Erro 404" />
    <p class="text-center font-medium text-gray-400">
      A página que você está procurando<br />
      não existe ou foi removida
    </p>
    <NuxtLink class="btn btn-primary transaction ease-out duration-500" to="/"
      >Volta para a Home</NuxtLink
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: 'Ooops.. Algo de errado não está certo :('
  }
})
</script>

<style lang="scss" scoped>
.error-layout {
  margin: 0;
}
</style>
