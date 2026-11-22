<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">

    <!-- Product Card -->
    <div class="bg-white rounded-2xl shadow-xl p-6 w-80 transition transform hover:scale-105">
      <img :src="product.image" alt="product" class="w-full h-64 object-cover rounded-lg mb-4" />

      <h2 class="text-xl font-bold mb-2">{{ product.name }} </h2>
      <p class="text-gray-600 mb-2">${{ product.price }} </p>

      <!-- Dynamic Stock Status -->
        <p 
  class="font-semibold mb-4"
  :class="product.stock > 0 ? 'text-green-600' : 'text-red-600'"
>
  {{ product.stock > 0 ? 'In Stock' : 'Out of Stock' }}
</p>
    

      <!-- Quantity Selector -->
      <input type="number" min="1" v-model="qty"
        class="border border-gray-300 rounded-lg px-3 py-1 w-full mb-4 focus:ring-2 focus:ring-blue-400 outline-none" />

      <!-- Add to Cart Button -->
      <button @click="addToCart" class="bg-blue-500 text-white p-2 rounded w-full">
        Add to Cart
      </button>
    </div>

    <!-- Cart Summary -->
    <div class="mt-6 w-80 bg-white rounded-xl shadow p-4">
      <h3 class="text-lg font-bold mb-2">Cart Summary</h3>
      <p>Total Items: <span class="text-blue-500 font-semibold"> {{ cart.length }} </span></p>
      <p>Total Price: <span class="text-green-500 font-semibold">$ {{ totalPrice }}</span></p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import head from './assets/na.webp'
// Product data
const product = ref({
  id: 1,
  name: 'Computer ASUS',
  price: 49,
  stock: 5,
  image: head
})
const cart = ref([])
const qty = ref(1)

const addToCart = () => {
  if (qty.value <= product.value.stock) {
    for (let i = 0; i < qty.value; i++) {
      cart.value.push({ ...product.value })
    }
    product.value.stock -= qty.value
    qty.value = 1
  } else {
    alert(`Our product in stock is ${produsk.value.stock} left!`)
  }
}

const totalPrice = computed(() => {
  let total = 0
  for (let i = 0; i < cart.value.length; i++) {
    total += cart.value[i].price
  }
  return total
})

</script>
