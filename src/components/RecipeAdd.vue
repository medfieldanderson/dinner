<script setup>
import { ref } from "vue";
import Heading from "./ui/UIHeading.vue";
import Input from "./ui/UIInput.vue";
import Button from "./ui/UIButton.vue";

import { Recipe} from "../models/recipe.js";
import { Ingredient } from "../models/ingredient";
import { Instruction } from "../models/instruction";

import { useRecipeStore } from "../stores/RecipeStore";

import { uid } from "uid/secure";

const store = useRecipeStore();

const model = ref({
  id: uid(16),
  recipe: "",
  cuisine: "",
  category: "",
  ingredients: new Array(),
  instructions: new Array(),
});

const ingredient = ref({
  id: "",
  item: "",
  qty: 0,
  unit: "",
});

const instruction = ref({
  id: "",
  action: "",
  sort: 0,
});

const addIngredient = (e) => {
  const { item, qty, unit } = ingredient.value;
  const newIngredient = new Ingredient(uid(10), item, qty, unit);
  model.value.ingredients.push(newIngredient);
};

const addInstruction = (e) => {
  const { action, sort } = instruction.value;
  const newInstruction = new Instruction(uid(10), action, sort);
  model.value.instructions.push(newInstruction);
};

const addRecipe = (e) => {
  const { recipe, cuisine, category } = model.value;
  console.log("SUBMIT", recipe, cuisine, category);
  const elements = e.target.elements;
  console.log(elements);
  console.log(model.value);

  store.recipes.push(model.value);

};
</script>
<template>
  <div class="recipe-add">
    <Heading tag="h2" title="Add Recipe" alignment="left" class="heading" />
    <form @submit.prevent="addRecipe">
      <Button type="submit" label="add recipe" class="btn" />
      <Heading title="Basic Information" alignment="left" class="sub-heading" />
      <div class="basic-info">
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
    </form>
    <div class="recipe-detail">
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
            type="text"
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
          <Button type="submit" label="add ingredient" class="btn" />
          <ul>
            <template v-for="ingredient in model.ingredients">
              <li>
                {{ ingredient.id }} {{ ingredient.qty }} {{ ingredient.unit }}
                {{ ingredient.item }}
              </li>
            </template>
          </ul>
        </div>
      </form>
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
            type="text"
            placeholder="order"
            v-model="instruction.sort"
          />
          <Button label="add instruction" type="submit" class="btn" />
          <ul>
            <template v-for="instruction in model.instructions">
              <li>
                {{ instruction.id }} {{ instruction.action }} {{ instruction.sort }}
              </li>
            </template>
          </ul>
        </div>
      </form>
    </div>

    <Input id="id" name="id" type="text" v-model="model.id" :disabled="true" />
  </div>
</template>

<style scoped>
.recipe-add {
  border-top: 1px solid darkorange;
  margin: 0 1em;
  .basic-info,
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
  flex-direction: row;
  height: 100vh;
  border: 2px solid green;
  .ingredient-list,
  .instruction-list {
    flex: 1 1 100%;
    flex-direction: column;
  }
}
</style>
