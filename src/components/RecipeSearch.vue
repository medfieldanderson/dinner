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
    <Heading tag="h2" title="Recipe Search" alignment="left" class="heading" />
    <Input name="recipe" placeholder="recipe" v-model="inputRecipe"/>
    <!-- <Input name="ingredient" placeholder="ingredient" /> -->
    <Button label="search" @click="searchRecipes"></Button>
    <div class="recipe-results">
      <h2>Results</h2>
      <ul>
        <template v-for="item in recipeList">
          <li>{{ item.recipe }}</li>
        </template>
      </ul>
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
}
.recipe-search > .heading {
  padding: 1em;
}
</style>
