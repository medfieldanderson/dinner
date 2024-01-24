<script setup>
import { ref } from "vue";
import Heading from "./ui/UIHeading.vue";
import Input from "./ui/UIInput.vue";
import Button from "./ui/UIButton.vue";

import { useRecipeStore } from "../stores/RecipeStore";

import { uid } from "uid/secure";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const store = useRecipeStore();

const model = ref({
  id: "",
  recipe: "",
  cuisine: "",
  category: "",
  ingredients: new Array(),
  instructions: new Array(),
});

const ingredient = ref({
  id: "",
  item: "",
  qty: null,
  unit: "",
});

const instruction = ref({
  id: "",
  action: "",
  sort: null,
});

const clearIngredient = () => {
  ingredient.value = {};
  document.getElementById("item").focus();
};

const addIngredient = () => {
  const { item, qty, unit } = ingredient.value;
  const newIngredient = {
    id: uid(10),
    item: item,
    qty: qty,
    unit: unit,
  };
  model.value.ingredients.push(newIngredient);
  clearIngredient();
};

const clearInstruction = () => {
  instruction.value = {};
  document.getElementById("action").focus();
};

const addInstruction = () => {
  const { action, sort } = instruction.value;
  const newInstruction = { id: uid(10), action: action, sort: sort };
  model.value.instructions.push(newInstruction);
  clearInstruction();
};

const clearRecipe = () => {
  model.value = {};
  clearIngredient();
  model.value.ingredients = []; //may not be necessary
  clearInstruction();
  model.value.instructions = []; // may not be necessary
  document.getElementById("recipe").focus();
};

const addRecipe = async () => {
  model.value.id = uid(16);

  // NOTE:  How should local store and firebase work together
  // local store
  console.log("MODEL", model.value);
  store.recipes.push(model.value);

  // firebase
  await setDoc(
    doc(db, "recipes", model.value.id),
    Object.assign({}, model.value)
  );
  clearRecipe();
};

// dialogs
const showAddModal = (type) => {
  const modal = document.getElementById(`add-${type}-modal`);
  modal.showModal();
};
const hideAddModal = (type) => {
  const modal = document.getElementById(`add-${type}-modal`);
  modal.close();
};
</script>
<template>
  <div class="recipe-add">
    <!-- <Heading tag="h2" title="Add Recipe" alignment="left" class="heading" /> -->
    <Heading tag="h2" title="Add Recipe" class="heading" />
    <form @submit.prevent="addRecipe">
      <div>
        <Input
          id="recipe"
          name="recipe"
          type="text"
          placeholder="recipe name"
          v-model="model.recipe"
        />
        <Input
          id="cuisine"
          name="cuisine"
          type="text"
          placeholder="cuisine"
          v-model="model.cuisine"
        />
        <Input
          id="category"
          name="category"
          type="text"
          placeholder="category"
          v-model="model.category"
        />
      </div>
      <Button
        id="add-ingredients"
        label="add ingredients"
        @click="showAddModal('ingredients')"
      />
      <Button
        id="add-instructions"
        label="add instructions"
        @click="showAddModal('instructions')"
      />
      <Button type="submit" label="add recipe" :primary="true" />
    </form>
    <div class="recipe-detail">
      <dialog id="add-ingredients-modal">
        <form @submit.prevent="addIngredient">
          <div class="ingredient-list">
            <Heading
              title="Ingredient List"
              alignment="left"
              class="sub-heading"
            />
            <Input
              id="item"
              name="item"
              type="text"
              placeholder="ingredient name"
              v-model="ingredient.item"
            />
            <Input
              id="qty"
              name="qty"
              type="number"
              placeholder="quantity"
              v-model="ingredient.qty"
            />
            <Input
              id="unit"
              name="unit"
              type="text"
              placeholder="unit"
              v-model="ingredient.unit"
            />
            <Button type="submit" label="add ingredient" :primary="true" />
            <ul class="item-list">
              <template v-for="ingredient in model.ingredients">
                <li class="list-item">
                  <!-- {{ ingredient.id }}  -->
                  {{ ingredient.qty }}
                  {{ ingredient.unit }}
                  {{ ingredient.item }}
                </li>
              </template>
            </ul>
          </div>
          <Button
            id="close-ingredient-modal"
            label="Close"
            alignment="right"
            @click="hideAddModal('ingredients')"
          />
        </form>
      </dialog>
      <dialog id="add-instructions-modal">
        <form @submit.prevent="addInstruction">
          <div class="instruction-list">
            <Heading
              title="Instruction List"
              alignment="left"
              class="sub-heading"
            />
            <Input
              id="action"
              name="action"
              type="text"
              placeholder="instruction"
              v-model="instruction.action"
            />
            <Input
              id="sort"
              name="sort"
              type="number"
              placeholder="order"
              v-model="instruction.sort"
            />
            <Button
              label="add instruction"
              type="submit"
              :primary="true"
              @click="hideAddModal('instructions')"
            />
            <ul class="item-list">
              <template v-for="instruction in model.instructions">
                <li class="list-item">
                  <!-- {{ instruction.id }}  -->
                  {{ instruction.action }}
                  {{ instruction.sort }}
                </li>
              </template>
            </ul>

            <Button
              class="close-instruction-modal"
              label="close"
              alignment="right"
              @click="hideAddModal('instructions')"
            />
          </div>
        </form>
      </dialog>
    </div>

    <Input id="id" name="id" type="text" v-model="model.id" :disabled="true" />
  </div>
</template>

<style scoped>
.recipe-add {
  border-top: 1px solid darkorange;
  margin: 0 1em;
  width: 100%;
  .ingredient-list,
  .instruction-list {
    display: flex;
    flex-direction: row;
  }
  .ui-input,
  .ui-button {
    padding-right: 0.5rem;
  }
  .sub-heading,
  > .heading {
    padding: 1em;
  }
  > .btn {
    padding: 1em;
  }
}
.recipe-detail {
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* height: 100vh; */
  .ingredient-list,
  .instruction-list {
    flex: 1 1 100%;
    flex-direction: column;
  }
}
</style>
