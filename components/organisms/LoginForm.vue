<template>
  <div class="login-form">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="space-y-6" @submit.prevent="handleSubmit(onSubmit)">
        <InputText
          v-model="email"
          name="E-mail"
          label="E-mail"
          rules="required|email"
        />
        <InputText
          v-model="password"
          type="password"
          name="Password"
          label="Senha"
          rules="required|min:6"
        />
        <button
          class="btn btn-block btn-primary transaction ease-out duration-500"
        >
          Log In
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ValidationObserver } from 'vee-validate'
import InputText from '~/components/molecules/InputText.vue'

export default Vue.extend({
  components: { ValidationObserver, InputText },
  layout: 'default',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit(value: any) {
      alert('Form submitted! Values: ' + value)
    }
  }
})
</script>

<style lang="scss" scoped>
.login-form {
}
</style>
