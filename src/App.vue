<script setup>
import { ref } from "vue";
import UIHeading from "./components/ui/UIHeading.vue";
import MainMenu from "./components/MainMenu.vue";
import { Recipe } from "./models/recipe";
import { Ingredient } from "./models/ingredient";
import { Instruction } from "./models/instruction";

import { useRecipeStore } from "./stores/RecipeStore";

const recipeStore = useRecipeStore();

const ingredients = ref([]);
const instructions = ref([]);
const recipes = ref([]);

ingredients.value.push(new Ingredient("chicken", 10, "ounces"));
instructions.value.push(new Instruction("Do not rinse", 0));
instructions.value.push(new Instruction("Bake at 350 for 40 minutes", 1));
ingredients.value.push(new Ingredient("rice", 2, "cups"));
instructions.value.push(new Instruction("Rinse rice in metal collander", 2));
instructions.value.push(new Instruction(
  "Cook rice in small rice cooker with slight over 2 cups water",
  2
));

recipes.value.push(new Recipe("Chicken & Rice", "American", "comfort", ingredients, instructions));
</script>

<template>
  <div class="recipe-app">
    <UIHeading title="What's for Dinner?" class="main-heading"></UIHeading>
    <div class="main-content">
      <MainMenu />
      <div class="recipe-app-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: Cookie;
  src: url("../src/assets/fonts/Cookie/Cookie-Regular.ttf");
}
@font-face {
  font-family: Inter-Regular;
  src: url("../src/assets/fonts/Inter/static/Inter-Regular.ttf");
}
</style>
<style scoped>
.recipe-app {
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
}
.main-heading {
  font-family: Cookie;
  color: brown;
  font-size: 4rem;
  margin-top: 3rem;
}
.main-content {
  display: flex;
  flex-direction: row;
}
.recipe-app-content {
  display: flex;
  flex-direction: row;
  width: 100%;
}
</style>
