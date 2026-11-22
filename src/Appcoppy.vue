<template>
  <div class="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white mt-5">
    <h1 class="text-2xl font-bold text-center mb-4">Total Price Calculator</h1>

    <label for="originalPrice" class="block text-gray-700">Original Price</label>
    <input type="number" id="originalPrice "v-model="originalPrice"
      class="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" />
      
    <label for="discountPercentage" class="block text-gray-700 mt-4">Discount Percentage</label>
    <input type="number" id="discountPercentage"v-model="discountPercentage"
      class="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" />

    <h2 class="text-xl font-semibold text-center mt-4">
      Total Price After Discount: <span class="font-bold text-blue-700">{{ totalPrice}}</span>
    </h2>
  </div>
</template>


<script setup>
import{computed, ref}from 'vue';
const originalPrice=ref()
const discountPercentage=ref()


const totalPrice=computed(()=>{
  return originalPrice.value -( originalPrice.value * discountPercentage.value)/100;
})
</script>