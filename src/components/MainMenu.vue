<script setup>
import UILink from './ui/UILink.vue';
</script>
<template>
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
</template>

<style scoped>
.recipe-app-menu {
  display: flex;
  flex-direction: column;
  align-items: left;
  font-family: "Inter-Regular", "sans-serif";
  background-color: beige;
  border: 0.125px solid silver;
}
.recipe-app-menu-item {
  padding: 0 1rem 1rem 1rem;
  margin-bottom: 0.125rem;
  flex: 1 1 100%;
}
</style>
