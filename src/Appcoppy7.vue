<template>
    <div class="w-3/4 m-auto bg-blue-500 mt-5 rounded-2xl">

        <button @click="compClick='home' " class="text-white text-2xl p-5 ml-5">Home</button>
        <button @click="compClick='New' " class="text-white text-2xl p-5 ml-5">New</button>
        <button @click="compClick='AboutUs'" class="text-white text-2xl p-5 ml-5">About Us</button>
        <button  class="text-white text-2xl p-5 ml-5">Add Student</button>


    </div>
    <div class="w-3/4 m-auto h-screen bg-gray-200 rounded-2xl">
        <component :is="compName[compClick]"/>
     
        <div class="mt-10" v-if="showTport">
            <teleport to="body">
                <input class="border border-yellow-500 text-xl p-2" type="text" placeholder="Enter user">
                <input class="border border-yellow-500 text-xl p-2" type="text" placeholder="Enter password">
                input class="border border-yellow-500 text-xl p-2" type="text" placeholder="Enter ">
                <input class="border border-yellow-500 text-xl p-2" type="text" placeholder="Enter ">

            </teleport>
        </div>   
    </div>


    
  
</template>
<script setup>

import { ref, Teleport }   from 'vue';


import AboutUs from './dynamicCom/Aboutus.vue';
import New from './dynamicCom/New.vue';
import home from './dynamicCom/home.vue';

const compName = ref ({home,New,AboutUs});
const compClick = ref ('home')
const showTport = ref ('false')


</script>