<template>
    <product>
        <template v-slot:Navbar>
            <h2>Navigation bar</h2>
        </template>

        <template v-slot:B="student">
            <h2>Body</h2>

           
        <div v-for="s in student" class="bg-blue-100 rounded-2xl p-4 flex flex-col items-center w-64 hover:scale-105 transform transition duration-300">
            <img :src="'https://i.pravatar.cc/100?img=1'" alt="Avatar" class="w-24 h-24 rounded-full mb-3" />

            <h2 class="text-lg font-bold text-gray-800">name:{{ s.name }}</h2>
            <p class="text-gray-600">Age:{{ s.age }}</p>
            <p class="text-gray-600">Major:{{ s.major }} </p>

          

        <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
            View Details
        </button>
        </div>    

        </template>

        <template v-slot:F>
            <h2>Footer</h2>
        </template>
    </product>
</template>
<script setup>
    import product from './psc/product.vue';
    
</script>