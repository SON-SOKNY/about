<template>
  <div class="p-10 bg-gray-50 min-h-screen w-full font-sans">
    <div class="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg mx-auto">
      <h1 class="text-2xl font-bold mb-6 border-b pb-2 text-gray-800">Todo App</h1>

      <form @submit.prevent="handleSubmit" class="flex mb-4">
        <input 
          v-model="inputText" 
          type="text" 
          placeholder="Add a new task..."
          class="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ref="inputRef" 
        />
        <button 
          type="submit" 
          :class="editIndex !== null ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'"
          class="px-4 py-2 rounded-r-lg text-white transition font-medium"
        >
          {{ editIndex !== null ? 'Update' : 'Add' }}
        </button>
      </form>

      <div class="flex space-x-2 mb-6">
        <button 
          @click="filter = 'all'" 
          :class="filter === 'all' ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-gray-100'"
          class="px-3 py-1 rounded-md text-sm border transition"
        >All</button>
        <button 
          @click="filter = 'done'" 
          :class="filter === 'done' ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-gray-100'"
          class="px-3 py-1 rounded-md text-sm border transition"
        >Done</button>
        <button 
          @click="filter = 'todo'" 
          :class="filter === 'todo' ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-gray-100'"
          class="px-3 py-1 rounded-md text-sm border transition"
        >Not Done</button>
      </div>

      <ul v-if="filteredTodos.length > 0" class="space-y-3">
        <li 
          v-for="(item, index) in filteredTodos" 
          :key="item.id" 
          class="flex justify-between items-center border-b border-gray-50 pb-2"
        >
          <div class="flex items-center space-x-3">
            <input 
              type="checkbox" 
              v-model="item.done"
              class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer" 
            />
            <span :class="{ 'line-through text-gray-400': item.done }" class="text-gray-700">
              {{ item.name }}
            </span>
          </div>

          <div class="space-x-3 text-sm">
            <button @click="startEdit(item)" class="text-blue-600 hover:text-blue-800 font-medium">
              Edit
            </button>
            <button @click="deleteTodo(item.id)" class="text-red-500 hover:text-red-700 font-medium">
              Delete
            </button>
          </div>
        </li>
      </ul>

      <p v-else class="text-gray-400 mt-10 text-center italic">
        No tasks found.
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const inputText = ref('');
const inputRef = ref(null);
const todos = ref([]);
const filter = ref('all');
const editIndex = ref(null); 

const filteredTodos = computed(() => {
  if (filter.value === 'done') return todos.value.filter(t => t.done);
  if (filter.value === 'todo') return todos.value.filter(t => !t.done);
  return todos.value;
});

const handleSubmit = () => {
  if (!inputText.value.trim()) return;

  if (editIndex.value !== null) {
    const todo = todos.value.find(t => t.id === editIndex.value);
    if (todo) todo.name = inputText.value;
    editIndex.value = null;
  } else {
    todos.value.push({
      id: Date.now(),
      name: inputText.value,
      done: false
    });
  }
  
  inputText.value = '';
  inputRef.value.focus();
};

const startEdit = (todo) => {
  inputText.value = todo.name;
  editIndex.value = todo.id;
  inputRef.value.focus();
};

const deleteTodo = (id) => {
  todos.value = todos.value.filter(t => t.id !== id);
};
</script>