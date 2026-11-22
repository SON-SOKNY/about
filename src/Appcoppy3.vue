<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center py-10">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Simple Cart</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-10/12">
      <div v-for="item in products" class="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
        <img :src="item.image" alt="product" class="w-full h-40 object-cover rounded-lg mb-4" />
        <h2 class="text-lg font-semibold mb-2">{{ item.name }}</h2>
        <p class="text-gray-600 mb-4">${{ item.price }}</p>
        <button @click="addToCart(item)" class="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Add to Cart
        </button>
      </div>
    </div>

    <div class="mt-10 bg-white p-6 rounded-xl shadow-lg w-80 text-center">
      <h2 class="text-xl font-bold text-gray-700 mb-3">Cart Summary</h2>
      <p class="text-gray-600">Total Items:
        <span class="text-blue-600 font-bold">{{ cart.length }}</span>
      </p>
      <p class="text-gray-600">Total Price:
        <span class="text-green-600 font-bold">${{ totalPrice}}</span>
      </p>
      <button @click="clearCart" class="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
        Clear Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

import mouse from'./assets/na.webp'
import nana from'./assets/na.webp'
import saka from'./assets/na.webp'

const products = ref([
  { id: 1, name: 'Mouse', price: 15, image: mouse },
  { id: 2, name: 'nana', price: 25, image: nana },
  { id: 3, name: 'saka', price: 45, image: saka }
])

const cart = ref ([

])
const addToCart = (product) =>{
  cart.value.push({...product})
 
}

const totalPrice = computed(() =>{
  let total = 0
  for (let i = 0; i<cart.value.length; i++){
    total += cart.value[i].price
  }
  return total
})

</script>
