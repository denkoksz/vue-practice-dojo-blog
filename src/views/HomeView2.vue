<template>
  <div class="home">
    <p ref="p">My name is: {{name}} and my age is: {{age}}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Increase age</button>
    <input type="text" v-model="name">
  </div>
  <div>
    <h2>Refs</h2>
    <p>{{ninjaOne.name}} - {{ninjaOne.age}}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
  </div>
  <div>
    <h2>Reactive</h2>
    <p>{{ninjaTwo.name}} - {{ninjaTwo.age}}</p>
    <button @click="updateNinjaTwo">update ninja two</button>
  </div>
</template>

<script>

import { ref, reactive } from 'vue';

export default {
  name: 'Home2',
  setup() {

    // const p = ref(null);

   const name = ref('Mario');
   const age = ref(30);
   const ninjaOne = ref({name: 'mario', age: 22});
   const ninjaTwo = reactive({name: 'luigi', age: 33});

   const updateNinjaOne = () => {
     ninjaOne.value.age = 99;
   }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 40;
    }

   const handleClick = () => {
     name.value = 'luigi';
     age.value = 15;
   }

   return {
     name,
     age,
     handleClick,
     ninjaOne,
     updateNinjaOne,
     ninjaTwo,
     updateNinjaTwo
   }
  }
}
</script>
