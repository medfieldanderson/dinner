<script setup>
import { ref } from "vue";
import UIHeading from "./ui/UIHeading.vue";
import UIInput from "./ui/UIInput.vue";
import UIButton from "./ui/UIButton.vue";
// import AddIngredient from "./ingredients/AddIngredient.vue"

import { uid } from "uid/secure";
let id = uid(16);
console.log(id);
const newId = ref(id);
</script>
<template>
  <div class="recipe-add">
    <UIHeading title="Add Recipe" alignment="left" class="heading" />

    <UIHeading title="Basic Information" alignment="left" class="sub-heading" />
    <div class="basic-info">
      <UIInput id="name" name="name" type="text" placeholder="recipe name" />
      <UIInput
        id="cuisine"
        name="cuisine"
        type="text"
        placeholder="cuisine (TODO: dropdown)"
      />
      <UIInput
        id="category"
        name="category"
        type="text"
        placeholder="category"
      />
    </div>
    <UIHeading title="Ingredient List" alignment="left" class="sub-heading" />
    <div class="ingredient-list">
      <UIButton label="+" class="btn" />
      <UIInput id="name" name="name" type="text" placeholder="name" />
      <UIInput id="qty" name="qty" type="number" placeholder="quantity"/>
      <UIInput id="unit" name="unit" type="text" placeholder="unit" />
    </div>
    <UIHeading title="Instruction List" alignment="left" class="sub-heading" />
    <div class="instruction-list">
      <UIButton label="+" class="btn" />
      <UIInput id="action" name="action" type="text" placeholder="action" />
      <UIInput id="sort" name="sort" type="number" placeholder="order" />
      <div class="ui-input blank"></div>
    </div>
    <!-- <AddIngredient /> -->
    <UIButton label="add recipe" class="btn" />
    <UIInput id="id" name="id" type="text" :disabled="true" :value="newId" />
  </div>
</template>

<style scoped>
.recipe-add {
  border-top: 1px solid darkorange;
  margin: 0 1em;
  flex: 1;
  .basic-info,
  .ingredient-list,
  .instruction-list {
    display: flex;
    flex-direction: row;
  }
  .basic-info > .ui-input,
  .ingredient-list > .ui-input,
  .ingredient-list > .ui-button,
  .instruction-list > .ui-input,
  .instruction-list > .ui-button {
    align-content: left;
    padding-right: 0.250rem;
  }
  .sub-heading,
  > .heading {
    padding: 1em;
  }
  > .btn {
    padding: 1em;
  }
}
</style>
