<<template>
  <div class="min-h-screen bg-gray-100 p-10">

    <h1 class="text-4xl font-bold text-center text-blue-900 mb-10">
      Student Entry Form
    </h1>

    <!-- Form Container -->
    <div class="bg-white p-8 rounded-xl shadow max-w-4xl mx-auto">

      <!-- Student Name -->
      <h2 class="text-xl font-semibold text-blue-900 mb-3">Student Name</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <input v-model="firstName" placeholder="First" class="w-full border-2 border-yellow-400 p-3 rounded-md" />
        <input v-model="lastName" placeholder="Last" class="w-full border-2 border-yellow-400 p-3 rounded-md" />
      </div>

      <!-- Grade + Age -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label class="font-semibold text-blue-900">Grade</label>
          <input v-model="grade" type="number" class="w-full border-2 border-yellow-400 p-3 rounded-md mt-1" />
        </div>

        <div>
          <label class="font-semibold text-blue-900">Age</label>
          <input v-model="age" type="number" class="w-full border-2 border-yellow-400 p-3 rounded-md mt-1" />
        </div>
      </div>

      <!-- Address -->
      <h2 class="text-xl font-semibold text-blue-900 mb-3">Address</h2>
      <input v-model="address" placeholder="Street Address"
        class="w-full border-2 border-yellow-400 p-3 rounded-md mb-4" />

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
        <input v-model="city" placeholder="City" class="w-full border-2 border-yellow-400 p-3 rounded-md" />
        <input v-model="region" placeholder="Region" class="w-full border-2 border-yellow-400 p-3 rounded-md" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
        <select v-model="country" class="w-full border-2 border-yellow-400 p-3 rounded-md">
          <option>Cambodia</option>
          <option>Vietnam</option>
          <option>Laos</option>
        </select>
      </div>

      <!-- Error Message -->
      <p v-if="errorMsg" class="text-red-600 text-center mb-4">
        {{ errorMsg }}
      </p>

      <!-- Buttons -->
      <div class="text-center mt-4">
        <button @click="addStudent" class="bg-blue-600 px-2 py-3 rounded-md text-white text-xl mr-4">
          Add Student
        </button>

        <button @click="updateStudent(editId)" class="bg-green-600 px-2 py-3 rounded-md text-white text-xl">
          Update Student
        </button>

        <button @click="cancelEdit" class="bg-gray-600 px-2 py-3 rounded-md text-white text-xl ml-4">
          Cancel
        </button>
      </div>

    </div>

    <!-- Student List -->
    <h2 class="text-3xl font-bold text-center mt-12 mb-6">Student List</h2>

    <transition-group name="fade" tag="ul" class="max-w-4xl mx-auto space-y-4">
      <li v-for="(st, id) in tbleStudent" class="bg-white p-6 rounded shadow flex justify-between">
        <div>
          <p><b>First Name:</b> {{ st.firstname }} </p>
          <p><b>Last Name:</b> {{ st.lastname }} </p>
          <p><b>Grade:</b> {{ st.grade }} <b>Age:</b> {{ st.age }} </p>
          <p><b>Address:</b> {{ st.address }} , {{ st.city }} , {{ st.region }} , {{ st.county }} </p>
          <p><b>Index: {{ id }}</b></p>
        </div>
        <div class="flex space-x-3">
          <button @click="editStudent(st, id)" class="text-yellow-500 font-bold">Edit</button>
          <button @click="deletStudent(id)" class="text-red-500 font-bold">Delete</button>
        </div>
      </li>
    </transition-group>

  </div>
</template>

<script setup>
import { ref } from 'vue';


const firstName = ref('');
const lastName = ref('');
const grade = ref(null);
const age = ref(null);
const address = ref('');
const city = ref('');
const region = ref('');
const country = ref('Cambodia')
// table student
const tbleStudent = ref([
  {
    firstname: 'Ly',
    lastname: 'Dara',
    grade: 3,
    age: 10,
    address: 'BTB',
    city: 'PP',
    region: 'Budha',
    county: 'Cambodia'
  },
  {
    firstname: 'Ly',
    lastname: 'Ka',
    grade: 3,
    age: 10,
    address: 'BTB',
    city: 'PP',
    region: 'Budha',
    county: 'Cambodia'
  },
])

const editId = ref(null)
const errorMsg = ref('')

const addStudent = () => {
  if (!firstName.value || !lastName.value || !grade.value) {
    errorMsg.value = 'Please fill all required fields';
    return;
  }
  tbleStudent.value.push({
    firstname: firstName.value,
    lastname: lastName.value,
    grade: grade.value,
    age: age.value,
    address: address.value,
    city: city.value,
    region: region.value,
    county: country.value
  });
  errorMsg.value = 'Successfully added student'
  setTimeout(() => {
    errorMsg.value = ''
  }, 2000);
  
  clsForm()
}

const editStudent = (s, id) => {
  firstName.value = s.firstname
  lastName.value = s.lastname
  grade.value = s.grade
  age.value = s.age
  address.value = s.address
  city.value = s.city
  region.value = s.region
  country.value = s.county
  editId.value = id
}

const updateStudent = (id) => {
  if(editId.value == null){
    errorMsg.value = 'No value to update';
    return;
  }
  tbleStudent.value[id] = {
    firstname: firstName.value,
    lastname: lastName.value,
    grade: grade.value,
    age: age.value,
    address: address.value,
    city: city.value,
    region: region.value,
    county: country.value
  }
  errorMsg.value = `Student index ${editId.value} was updated.`
  editId.value = null
  clsForm();
}

const deletStudent = (id) => {
  tbleStudent.value.splice(id, 1)
}

const cancelEdit = (id) => {
  clsForm();
  errorMsg.value = 'Edit cancale'
}

const clsForm = () => {
  firstName.value = ''
  lastName.value = ''
  grade.value = ''
  age.value = ''
  address.value = ''
  city.value = ''
  region.value = ''
  country.value = ''
}



</script>


<style>
/* Animation */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease;
}
</style>

