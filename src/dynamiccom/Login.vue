<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-sm bg-white p-6 rounded-lg shadow">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>

      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
      />

      <button
        @click="login"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
import { useRouter } from 'vue-router'

  const router = useRouter()
  const username = ref ('')
  const password = ref ('')

  const login = () => {
    if(username.value === 'so' && password.value ==='123'){
      sessionStorage.getItem('so', 'true')
      router.push('/')
    }else{
      alert('You are not auth')
    }
  }
</script>


