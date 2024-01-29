<script setup>
import UILink from "./ui/UILink.vue";
</script>
<template>
  <nav class="recipe-app-menu">
    <UILink
      class="recipe-app-menu-item"
      dest="/"
      label="Home"
      icon="home"
    ></UILink>
    <UILink
      class="recipe-app-menu-item"
      dest="search"
      label="Search"
      icon="search"
    ></UILink>
    <UILink
      class="recipe-app-menu-item"
      dest="add-recipe"
      label="Add"
      icon="add_circle"
    ></UILink>
    <UILink
      class="recipe-app-menu-item"
      dest="spotlight"
      label="Classics"
      icon="history"
    ></UILink>
    <UILink
      class="recipe-app-menu-item"
      dest="resources"
      label="Resources"
      icon="laptop"
    ></UILink>
    <UILink
      class="recipe-app-menu-item"
      dest="takeout"
      label="Takeout"
      icon="takeout_dining"
    ></UILink>
  </nav>
</template>

<style scoped>
.recipe-app-menu {
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
  font-family: "Inter-Regular", "sans-serif";
  z-index: 1;
  padding-left: 0.5em;
  .recipe-app-menu-item {
    padding: 0;
    flex: 2 2 25%;
  }
}
@media (max-width: 600px) {
  .recipe-app-menu-item {
    font-size: 0.75rem;
  }
}
</style>
