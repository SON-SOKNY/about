<template>
  <div class="max-w-3xl mx-auto bg-gray-100 p-6 rounded-2xl shadow">
    <h1 class="text-4xl font-bold text-center mb-6">Shopping Cart</h1>

    <!-- Input -->
    <div class="flex gap-2 mb-6">
      <input type="text" placeholder="Enter item name"
        class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300" />

      <input type="number" min="0" v-model="itemqty"
        class="w-24 px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300" />

      <button @click="addItem" class="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Add Item
      </button>
    </div>

    <!-- Cart Items -->
    <div class="bg-white p-5 rounded-xl shadow mb-4 flex justify-between items-center">
      <div v-for="item in cart">
        <h2 class="text-xl font-semibold">{{ item.name }} </h2>
        <p class="text-gray-600">Price: ${{ item.price.toFixed(2) }}</p>
      </div>

      <!-- Qty Control -->  
      <div class="flex items-center gap-3">
        <button @click="" class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
          -
        </button>

        <span class="text-lg font-bold"> item.qty </span>

        <button class="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">
          +
        </button>
      </div>

      <!-- Total -->
      <p class="font-semibold text-lg">
        Total: $ (item.price * item.qty).toFixed(2)
      </p>

      <!-- Remove -->
      <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Remove
      </button>
    </div>

    <!-- Summary -->
    <div class="bg-gray-300 p-5 rounded-xl mt-6">
      <h2 class="text-xl font-bold mb-2">Cart Summary</h2>

      <p>Total Items: totalItems </p>
      <p>Total Price: $ totalPrice.toFixed(2) </p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const itemName = ref('')
const itemqty = ref('1')




const cart = ref([
  { name: "Iphone", price: 1000, qty: 6 },
  { name: "RAM", price: 50, qty: 4 },
])


</script>
