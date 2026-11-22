<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <!-- Buttons to trigger notifications -->
    <div class="space-x-4 mb-6">
      <button @click="showMsg('green','Success','Message')"
        class="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300">
        Show Success
      </button>
      <button @click="showMsg('red', 'Error Message')" 
       class="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all duration-300">
        Show Error
      </button>
      <button @click="showMsg('blue','Info Message')" 
        class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
        Show Info
      </button>
    </div>

    <!-- Notification with Tailwind transitions -->
    <div v-if="isshowMsg"
      :class="colorType  "
      class="fixed top-40 left-1/2 transform -translate-x-1/2 w-96 p-4 rounded-lg shadow-lg text-center transition-opacity duration-500">
      <p class="text-lg font-semibold">Display message</p>
      <button  @click="isshowMsg = false" class="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-all duration-200">
        Dismiss
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref} from 'vue'

const isshowMsg =  ref (false)
const color = ref ('')
const message = ref('')

const showMsg = ( colorName,msg) =>{
  color.value = colorName
  message.value = msg
  isshowMsg.value = true
}

const colorType = computed(() =>{
  switch(color.value){
    case 'green' : return "bg-green-100 border border-green-800"
    case 'red' : return "bg-red-100 border border-red-500"
    case 'blue' : return "bg-blue-100 border border-blue-500"
    default: return ""
    }
  }
)

</script>
