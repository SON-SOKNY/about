<template>
    <div class="w-1/2 m-auto bg-gray-400">
        <slot name="Navbar"></slot>
        <slot name="B" :student="tbStudent"></slot>
        <slot name="F"></slot>
    </div>
   
</template>
<script setup>
import {reactive} from 'vue';

const tbStudent = reactive([
    {
        name: 'Ly Dara',
        age: 18,
        major:'Computer Science'
    }
   
]);
</script>