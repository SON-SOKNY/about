<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Student Gallery</h1>

    <!-- Responsive Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <StudentCart :st="students" @viewst="viewStudent" />
    </div>
    <div v-if="students" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white rounded-2xl p-6 w-96 relative">
        <!-- Close -->
        <button class="absolute top-3 right-3 text-gray-500 hover:text-red-500" @click="selectst = null">
          ✕
        </button>

        <img :src="'https://i.pravatar.cc/150?img=' + s.no" class="w-32 h-32 rounded-full mx-auto mb-4" />

        <h2 class="text-xl font-bold text-center">
          {{ students.name }}
        </h2>

        <p class="text-center text-gray-600">
          Age: {{ students.age }}
        </p>

        <p class="text-center text-gray-600">
          Major: {{ students.major }}
        </p>

        <p v-if="students.badge" class="text-center mt-2 text-yellow-600 font-semibold">
          🏅 {{ students.badge }}
        </p>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'

import StudentCart from './psc/StudentCart.vue';
const students = ref([
  { no: 1, name: 'Alice', age: 21, major: 'Computer Science', badge: 'Top Student' },
  { no: 2, name: 'Bob', age: 22, major: 'Mathematics' },
  { no: 3, name: 'Charlie', age: 20, major: 'Physics', badge: 'Star' },
  { no: 4, name: 'Daniel', age: 23, major: 'Chemistry' },
  { no: 5, name: 'Eva', age: 24, major: 'SE' },
  { no: 6, name: 'Saka', age: 22, major: 'IT' },
  { no: 7, name: 'Nasa', age: 32, major: 'MS' },
  { no: 8, name: 'Frank', age: 41, major: 'ITC' },


])

const selectst = ref(null)

const viewStudent = (s) => {
  selectst.value = s
}

</script>
