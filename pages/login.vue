<template>
  <div class="login-page">
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
        <div
          class="
            max-w-md
            w-full
            mx-auto
            flex flex-col
            justify-center
            items-center
          "
        >
          <img
            src="@/assets/images/login.svg"
            class="h-28 object-scale-down mb-4"
            alt="login"
          />
          <h1 class="text-center font-bold text-2xl text-gray-700 font-heading">
            Autenticação
          </h1>
          <div
            class="
              text-center
              font-medium
              text-sm text-gray-400
              font-subheading
            "
          >
            Efetue o login para acesso ao sistema
          </div>
        </div>
        <div class="max-w-md w-full mx-auto mt-4 bg-white p-8 shadow-md">
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
                class="
                  w-full
                  py-2
                  px-4
                  font-semibold
                  bg-blue-600
                  hover:bg-blue-800
                  rounded-md
                  text-white text-sm
                  transaction
                  ease-out
                  duration-500
                "
              >
                Log In
              </button>
            </form>
          </ValidationObserver>
        </div>
      </div>
      <div class="lg:col-span-2 lg:block hidden bg-gray-600"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ValidationObserver } from 'vee-validate'
import InputText from '~/components/atoms/InputText.vue'

export default Vue.extend({
  components: { ValidationObserver, InputText },
  layout: 'auth',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit(value: any) {
      alert('Form submitted! Values: ' + value)
    },
  },
})
</script>
s

<style lang="scss" scoped>
.login-page {
  margin: 0;
}
</style>
