<template>
    <div class="text-center p-6 bg-white rounded-lg shadow-md">
        Display Data from Parents
        <p>My name is <br>{{ name }}.i am {{ age }}year old.</p>
        <button @click="updateAge" class="bg-green-300 text-xl text-center p-1 rounded-lg"> Inscrease Age</button>
    </div>
</template>

<script setup>
    import { defineProps , defineEmits } from 'vue';

const Props = defineProps({
        name: String ,
        age: Number
    });
const emit = defineEmits();
const updateAge = () => {
    emit('change', Props.age+1)
}

</script>