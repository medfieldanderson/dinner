<script setup>
import { ref } from "vue";
import Heading from "./ui/UIHeading.vue";
import Button from "./ui/UIButton.vue";
import Input from "./ui/UIInput.vue";

import { useRecipeStore } from "../stores/RecipeStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { listFormatter } from "../util/string-util";
import router from "../router";

const store = useRecipeStore();

const recipesRef = collection(db, "recipes");

const inputRecipe = ref("");

const searchRecipes = async () => {
  const q = query(recipesRef, where("recipe", "==", inputRecipe.value));
  const querySnapshot = await getDocs(q);

  store.searchResults = [];
  let results = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data(), doc.data().recipe);
    console.log("doc.data() is ", typeof doc.data());
    results.push(doc.data());
    console.log(results);
  });
  Object.assign(store.searchResults, results);
};

const editRecipe = (recipe) => {
  console.log("edit recipe", recipe.id);
  router.push(`/edit-recipe/${recipe.id}`);
  // store.setCurrentRecipe(recipe.id);
}
</script>
<template>
  <div class="recipe-search">
    <form @submit.prevent="searchRecipes">
      <Heading tag="h2" title="Recipe Search" class="heading" />
      <Input name="recipe" placeholder="recipe" v-model="inputRecipe" />
      <!-- <Input name="ingredient" placeholder="ingredient" /> -->
      <Button type="submit" label="search" :primary="true"></Button>
    </form>

    <div>
      <h2>Results</h2>
      <div class="recipe-results">
        <template v-for="item, index in store.searchResults" :key="index">
          <div class="result" @click="editRecipe({id: item.id})">
            <h2>{{ item.recipe }}</h2>
            <div>{{ item.cuisine }} {{ item.category }}</div>
            <h3>Ingredients</h3>
            <ul>
              <template v-for="(ingredient, index) in item.ingredients" :key="ingredient.id">
                <span>
                  {{ ingredient.item
                  }}{{ listFormatter(index, item.ingredients.length) }}
                </span>
              </template>
            </ul>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recipe-search {
  display: flex;
  flex-direction: column;
  margin: 0 1em;
  flex: 1;
  .recipe-results {
    display: grid;
    gap: 1.5em;
    grid: repeat(3, 60px / auto-flow 80px);
    padding: 0.5rem;
    align-items: baseline;
    .result {
      cursor: pointer;
      border: 0.125px solid rgb(0, 0, 0, 0.1);
      padding: 1em;
      &:hover {
        box-shadow: 2px 2px 2px gray;
        h2 {
          filter: drop-shadow(1px 1px 1px silver);
        }
      }
      h2 {
        text-align: center;
      }
      ul {
        margin: 0;
        padding: 0;
        li {
          text-align: center;
          list-style: none;
        }
      }
    }
  }
}
</style>