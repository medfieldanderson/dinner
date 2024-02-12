<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Heading from "../ui/UIHeading.vue";
import Input from "../ui/UIInput.vue";
import Button from "../ui/UIButton.vue";
import ListItem from "../ui/UIListItem.vue";

import IngredientAdd from "./IngredientAdd.vue";
import InstructionAdd from "./InstructionAdd.vue";

import { uid } from "uid/secure";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

import { useRecipeStore } from "../../stores/RecipeStore";

const store = useRecipeStore();

const route = useRoute();
const id = Object.hasOwn(route.params, "id") ? route.params["id"] : "";
const pageTitle = id === "" ? "Add Recipe" : "Edit Recipe";

const urlHasId = () => {
  return Object.hasOwn(route.params, "id");
};

console.log("URL has ID?", urlHasId());

const model = ref({
  id: "",
  recipe: "",
  cuisine: "",
  category: "",
  ingredients: new Array(),
  instructions: new Array(),
});

const addIngredient = (ingredient) => {
  console.log("called addIngredient", ingredient);
  const { item, qty, unit } = ingredient;
  const newIngredient = {
    id: uid(10),
    item: item,
    qty: qty,
    unit: unit,
  };
  model.value.ingredients.push(newIngredient);
};

const addInstruction = (instruction) => {
  console.log(instruction);
  const { action, sort } = instruction;
  const newInstruction = { id: uid(10), action: action, sort: sort };
  model.value.instructions.push(newInstruction);
};

const clearRecipe = () => {
  model.value = {};
  model.value.ingredients = []; //may not be necessary
  model.value.instructions = []; // may not be necessary
  document.getElementById("recipe").focus();
};

const isAddRecipeEnabled = computed(() => {
  return (
    !!model.value.recipe &&
    !!model.value.cuisine &&
    !!model.value.category &&
    model.value.ingredients.length > 0 &&
    model.value.instructions.length > 0
  );
});

const addRecipe = async () => {
  model.value.id = uid(16);

  await setDoc(
    doc(db, "recipes", model.value.id),
    Object.assign({}, model.value)
  );
  clearRecipe();
};

const showAddModal = (type) => {
  const modal = document.getElementById(`add-${type}-modal`);
  modal.showModal();
};

const deleteIngredient = (item) => {
  model.value.ingredients = model.value.ingredients.filter(
    (i) => i.id !== item.id
  );
};
const deleteInstruction = (item) => {
  model.value.instructions = model.value.instructions.filter(
    (i) => i.id !== item.id
  );
};
onMounted(() => {
  if (urlHasId()) {
    const currentRecipe = store.searchResults.filter(
      (recipe) => (recipe.id = id)
    )[0];

    console.log("RecipeAdd mounted.", currentRecipe, currentRecipe.recipe);
    model.value = Object.assign({}, currentRecipe);
  }
});
</script>
<template>
  <div class="recipe-add">
    <Heading tag="h2" :title="pageTitle" class="heading" />
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
      <Button
        type="submit"
        label="submit"
        :primary="true"
        :disabled="!isAddRecipeEnabled"
      />
    </form>
    <div class="recipe-detail">
      <IngredientAdd
        v-model="model.ingredients"
        @add-ingredient="addIngredient"
      >
        <template #ingredient-list>
          <ul v-if="model.ingredients.length > 0">
            <template
              v-for="ingredient in model.ingredients"
              :key="ingredient.id"
            >
              <ListItem :id="ingredient.id" @delete-li="deleteIngredient">
                {{ ingredient.qty }} {{ ingredient.unit }} {{ ingredient.item }}
              </ListItem>
            </template>
          </ul>
        </template>
      </IngredientAdd>
      <InstructionAdd
        v-model="model.instructions"
        @add-instruction="addInstruction"
      >
        <template #instruction-list>
          <ul class="item-list">
            <template
              v-for="instruction in model.instructions"
              :key="instruction.id"
            >
              <ListItem :id="instruction.id" @delete-li="deleteInstruction">
                {{ instruction.action }}
                {{ instruction.sort }}
              </ListItem>
            </template>
          </ul>
        </template>
      </InstructionAdd>
    </div>

    <ul v-if="model.ingredients.length > 0">
      <template v-for="ingredient in model.ingredients" :key="ingredient">
        <ListItem :id="ingredient.id" @delete-li="deleteIngredient">
          {{ ingredient.qty }} {{ ingredient.unit }} {{ ingredient.item }}
        </ListItem>
      </template>
    </ul>
    <ul v-if="model.instructions.length > 0">
      <template v-for="instruction in model.instructions" :key="instruction.id">
        <ListItem :id="instruction.id" @delete-li="deleteInstruction">{{
          instruction.action
        }}</ListItem>
      </template>
    </ul>

    <Input id="id" name="id" type="text" v-model="model.id" :disabled="true" />
  </div>
</template>

<style lang="scss" scoped>
.recipe-add {
  border-top: 1px solid darkorange;
  // margin: 0 1em;
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
  > .btn {
    padding: 1em;
  }
}
.recipe-detail {
  display: flex;
  flex-direction: column;
  justify-content: start;
  .ingredient-list,
  .instruction-list {
    flex: 1 1 100%;
    flex-direction: column;
  }
}
</style>
