<template>
  <div class="text-input">
    <ValidationProvider
      v-slot="{ errors, failed }"
      tag="div"
      :rules="rules"
      :name="name"
      :vid="vid"
      class="w-full"
    >
      <label
        v-show="label.length > 0"
        for=""
        class="text-sm font-bold text-gray-600 block"
        >{{ label }}</label
      >
      <input
        v-model="currentValue"
        :type="type"
        class="
          w-full
          p-2
          rounded
          mt-1
          f
          outline-none
          border border-gray-300
          focus:border-gray-500 focus:ring-gray-500
        "
        :class="{
          'border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500':
            failed,
        }"
      />
      <p
        v-show="failed"
        class="text-xs font-semibold text-red-400"
        :class="{ 'animate-shake': failed }"
      >
        {{ errors[0] }}
      </p>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ValidationProvider } from 'vee-validate'

export default Vue.extend({
  name: 'TextInput',
  components: {
    ValidationProvider,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    rules: {
      type: [String, Object],
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    vid: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    currentValue: '',
  }),
  watch: {
    currentValue(val) {
      this.$emit('input', val)
    },
  },
})
</script>

<style lang="scss" scoped>
.text-input {
  display: flex;
  flex-direction: columns;
  margin: 0;
}
</style>
