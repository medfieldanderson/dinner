<script setup>
import { ref } from 'vue';
const inputs = ref([
  {
    id: 0,
    name: "ingredient",
  },
  {
    id: 1,
    name: "quantity",
  },
  {
    id: 2,
    name: "unit",
  },
  ]);
</script>

<template>
  <div class="container">
    <h3>New Ingredient</h3>
    <form class="add-ingredient-form">
      <template v-for="item in inputs" :key="item.id">
        <label class="add-ingredient-label">{{ item.name.toLocaleUpperCase() }}</label>
        <input :name="item.name" class="add-ingredient-input"/>
      </template>
      <button class="add-ingredient-button" type="button" >Add Ingredient</button>
    </form>
  </div>
</template>


<style scoped>
.container {
  position: relative;
  border: 1px solid #fd9fff;
  height: 75vh;
}
.add-ingredient-form {
  display: flex;
  flex-direction: column;
  /* margin: 1em; */
  /* padding: 1em; */
}
.add-ingredient-label {
  text-align: left;
  margin-left: 1em;
}
.add-ingredient-input {
  margin: 1em;
  height: 1.5em;
}
.add-ingredient-button {
  margin: 1em;
  padding: 1em;
  border: 1px solid forestgreen;
  background-color: #96e9af;
}
</style>
