<template>
    <div class="text-center w-1/2 mx-auto bg-green-200 rounded-lg shadow-lg">
        <h3> Parent Component </h3>
        <Child :name="sName" :age="sAge"@change="changeAge"/>
    </div>
</template>

<script setup>
    import {ref } from 'vue'

    import Child from './psc/Child.vue';
''
    const sName = ref ('Ly Dara');
    const sAge = ref (20);

    const changeAge= (ng) =>{
        sAge.value = ng;
    }
</script>