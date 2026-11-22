<template>
  <div class="p-6">
    <h1 class="text-xl font-bold mb-4">Student Info</h1>

    <button @click="addStudent" class="bg-blue-500 text-white px-4 py-2 rounded mb-4">
      Add Student
    </button>

    <table class="w-full border-collapse border border-gray-300 mb-4">
      <thead  class="bg-gray-200">
        <tr>
          <th class="border px-2 py-1">NO</th>
          <th class="border px-2 py-1">NAME</th>
          <th class="border px-2 py-1">AGE</th>
          <th class="border px-2 py-1">MAJOR</th>
          <th class="border px-2 py-1">ACTIONS</th>
        </tr>
      </thead>

      <tbody>
        <!-- Students from Pagination -->
        <tr v-for="s in tblStudent" :key="s.no">
          <td class="border px-2 py-1">{{ s.no }}</td>
          <td class="border px-2 py-1">{{ s.name }}</td>
          <td class="border px-2 py-1">{{ s.age }}</td>
          <td class="border px-2 py-1">{{ s.major }}</td>
          <td class="border px-2 py-1 space-x-2">
            <button class="bg-yellow-400 px-2 py-1 rounded">Edit</button>
            <button class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- PAGINATION UI -->
    <div class="flex justify-center items-center space-x-2 mb-4">
      <button class="px-3 py-1 border rounded">Prev</button>

      <button class="px-3 py-1 border rounded bg-blue-500 text-white font-bold">
        1
      </button>
      <button class="px-3 py-1 border rounded">2</button>
      <button class="px-3 py-1 border rounded">3</button>

      <button class="px-3 py-1 border rounded">Next</button>
    </div>

    <!-- Modal Placeholder -->
    <div>
      <!-- EditModal will appear here -->

       <model v-if="showModel" @closeModel="closeM" />

    </div>
  </div>
</template>
<script setup>

    import { ref} from 'vue';
    import Model from './components/example/Model.vue';

    const showModel = ref(false);

    const tblStudent = ref([
        { no: 1, name: 'Alice', age: 21, major: 'Computer Science' },
        
    ])

    const addStudent = () =>{
        showModel.value = true
    }

    const closeM = () => {
        showModel.value = false;
    }



</script>
