<template>
  <form @submit.prevent="frmValidate" class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-center">Student Practice Form</h2>

    <!-- Name -->
    <div class="mb-4">
      <label class="block text-sm font-medium mb-1">Name</label>
      <input v-model="tblstudent.name" type="text" class="w-full px-3 py-2 border rounded-md" placeholder="Enter your name" />
      <!-- Error message here -->
       <p class="text-red-500 text-xl font-bold">{{ errors.name }}</p>
    </div>

    <!-- Email -->
    <div class="mb-4">
      <label class="block text-sm font-medium mb-1">Email</label>
      <input v-model="tblstudent.email" type="email" class="w-full px-3 py-2 border rounded-md" placeholder="Enter your email" />
      <!-- Error message here -->
        <p class="text-red-500 text-xl font-bold">{{ errors.email }}</p>

       
    </div>

    <!-- Age -->
    <div class="mb-4">
      <label class="block text-sm font-medium mb-1">Age</label>
      <input v-model="tblstudent.age" type="number" class="w-full px-3 py-2 border rounded-md" placeholder="Enter your age" />
      <!-- Error message here -->
      <p class="text-red-500 text-xl font-bold">{{ errors.age }}</p>

    </div>

    <!-- Course -->
    <div class="mb-4">
      <label class="block text-sm font-medium mb-1">Select Course</label>
      <select v-model="tblstudent.course" class="w-full px-3 py-2 border rounded-md">
        <option value="" disabled selected>Select a course</option>
        <option value="math">Math</option>
        <option value="science">Science</option>
        <option value="english">English</option>
      </select>
      <!-- Error message here -->
      <p class="text-red-500 text-xl font-bold">{{ errors.course }}</p>

    </div>

    <!-- Terms -->
    <div class="mb-6">
      <label class="flex items-center">
        <input v-model="tblstudent.accept" type="checkbox" class="h-4 w-4" />
        <span class="ml-2 text-sm">I accept the rules</span>
      </label>
      <!-- Error message here -->
    </div>

    <!-- Submit -->
    <button type="submit" class="w-full bg-blue-500 text-white font-semibold py-2 rounded-md">
      Submit
    </button>
  </form>
</template>
<script setup>
import { reactive, watch } from 'vue';

const tblstudent = reactive(
  {
    name: '',
    email: '',
    age:'',
    course: '',
    accept: ''
  }
)

const errors = reactive(
  {
    name: '',
    email: '',
    age:'',
    course: '',
    accept: ''
  }
)


const Validation = (val,rules = {}) => {
    if(typeof val === 'string' && rules.required){
        if(!val.trim()) return 'This field is required'
    }

    if(typeof val === 'boolean' && rules.required){
      if(!val) return 'You have to '
    }
    
    if (rules.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(val)) {
      return 'Invalid email address'
    }
  }

}

watch(() => tblstudent.name, (val) => {
    errors.name = Validation(val,{ required: true, minlength: 5})
})

watch(() => tblstudent.email, (val) => {
    errors.email = Validation(val,{ required: true, email: true})
})

watch(() => tblstudent.age, (val) => {
    errors.age = Validation(val,{ required: true})
})

const frmValidate = () =>{
    errors.name = Validation(tblstudent.name,{required: true})
    if(!errors.name){
      alert('Success')
    }
}
</script>
