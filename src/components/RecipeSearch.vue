<script setup>
import { ref } from "vue";
import Heading from "./ui/UIHeading.vue";
import Button from "./ui/UIButton.vue";
import Input from "./ui/UIInput.vue";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
const recipesRef = collection(db, "recipes");

const inputRecipe = ref("");

const recipeList = ref([]);

const searchRecipes = async () => {
  const q = query(recipesRef, where("recipe", "==", inputRecipe.value));
  const querySnapshot = await getDocs(q);

  let results = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data(), doc.data().recipe);
    console.log("doc.data() is ", typeof doc.data());
    results.push(doc.data());
    console.log(results);
  });
  Object.assign(recipeList.value, results);
};
</script>
<template>
  <div class="recipe-search">
    <!-- <Heading tag="h2" title="Recipe Search" alignment="left" class="heading" /> -->
    <Heading tag="h2" title="Recipe Search" class="heading" />
    <Input name="recipe" placeholder="recipe" v-model="inputRecipe"/>
    <!-- <Input name="ingredient" placeholder="ingredient" /> -->
    <Button label="search" @click="searchRecipes" :primary="true"></Button>
    <div>
      <h2>Results</h2>
      <div class="recipe-results">
        <template v-for="item in recipeList">
          <div class="result">
            <h3>{{ item.recipe }}</h3>
          </div>
          <div class="result">
            <div>{{ item.cuisine }}</div>
            <div>{{ item.category }}</div>
          </div>
          <h4 class="result">Ingredients</h4>
          <template v-for="ingredient in item.ingredients">
            <div class="result">
              {{ ingredient.qty }} {{ ingredient.unit }} {{ ingredient.item }}
            </div>
          </template>
          <h4 class="result">Instructions</h4>
          <template v-for="instruction, index in item.instructions">
            <div class="result">
              {{ `Step ${index+1}: ${instruction.action}` }}
            </div>
          </template>
        </template>

      </div>
    </div>
  </div>
</template>

<style scoped>
.recipe-search {
  display: flex;
  flex-direction: column;
  border-top: 1px solid palegreen;
  margin: 0 1em;
  flex: 1;
  .heading {
    padding: 1em;
  }
  /* .recipe-results{
    display: grid;
    > .result{
      grid-template:
        "a b b" auto
        "c c c" auto
    }
  } */
}
</style>
