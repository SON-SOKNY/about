<template>
  <div v-for="i in 10">
    <p>{{ i }}</p>
    <MyComponent />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import Spinner from './Spinner.vue'

const MyComponent = defineAsyncComponent({
  loader: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./comconten.vue'))
      }, 200)
    }),

  loadingComponent: Spinner,
  delay: 0,
})
</script>
