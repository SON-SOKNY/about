<template>
    <div v-for="s in st"
        class="bg-blue-100 rounded-2xl p-4 flex flex-col items-center w-64 hover:scale-105 transform transition duration-300">
        <img :src="'https://i.pravatar.cc/100?img=' + s.no" alt="Avatar" class="w-24 h-24 rounded-full mb-3" />

        <h2 class="text-lg font-bold text-gray-800">{{ s.name }}</h2>
        <p class="text-gray-600">Age:{{ s.age }} </p>
        <p class="text-gray-600">Major: {{ s.major }}</p>

        <div v-if="s.badge" class="mt-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
          
        </div>

        <button @click="emt('view',s)" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
            View Details
        </button>
    </div>
</template>

<script setup>
import { defineProps,defineEmits } from 'vue';

 defineProps({
    st:Object
});

const emt = defineEmits();
</script>
