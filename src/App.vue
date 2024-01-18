<script setup>
import UIHeading from "./components/ui/UIHeading.vue";
import UILink from "./components/ui/UILink.vue";
import RecipeSearch from "./components/RecipeSearch.vue";
import RecipeSuggestion from "./components/RecipeSuggestion.vue";
import RecipeBox from "./components/RecipeBox.vue";
</script>

<template>
  <div class="recipe-app">
    <UIHeading title="What's for Dinner?" class="main-heading"></UIHeading>
    <div class="main-content">
      <div class="recipe-app-menu">
        <UILink
          class="recipe-app-menu-item"
          dest="search"
          label="Search"
          icon="search"
        ></UILink>
        <UILink
          class="recipe-app-menu-item"
          dest="suggestions"
          label="Favorites"
          icon="favorite"
        ></UILink>
        <UILink
          class="recipe-app-menu-item"
          dest="add-recipe"
          label="Add"
          icon="add_circle"
        ></UILink>
        <UILink
          class="recipe-app-menu-item"
          dest="cocktails"
          label="Cocktails"
          icon="wine_bar"
        ></UILink>
      </div>
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
  max-width: 90%;
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
.recipe-app-menu {
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  align-items: left;
  font-family: "Inter-Regular", "sans-serif";
}
.recipe-app-menu-item {
  /* text-wrap: nowrap; */
  /* margin-top: 1rem; */
  padding-bottom: 1em;
  flex: 1 1 100%;
}
.recipe-app-content{
  display: flex;
  flex-direction: row;
}

</style>
