<script setup>
import Link from "./ui/UILink.vue";
</script>
<template>
  <nav class="recipe-app-menu">
    <Link class="recipe-app-menu-item" dest="/" label="Home" icon="home"></Link>
    <Link
      class="recipe-app-menu-item"
      dest="search"
      label="Search"
      icon="search"
    ></Link>
    <Link
      class="recipe-app-menu-item"
      dest="add-recipe"
      label="Add"
      icon="add_circle"
    ></Link>
    <Link
      class="recipe-app-menu-item"
      dest="spotlight"
      label="Classics"
      icon="history"
    ></Link>
    <Link
      class="recipe-app-menu-item"
      dest="resources"
      label="Resources"
      icon="laptop"
    ></Link>
    <Link
      class="recipe-app-menu-item"
      dest="takeout"
      label="Takeout"
      icon="takeout_dining"
    ></Link>
  </nav>
</template>

<style lang="scss" scoped>


.recipe-app-menu {
  display: flex;
  flex-direction: row;
  gap: 1em;
  height: fit-content;
  width: fit-content;
  font-family: inherit;
  z-index: 1;
  padding-top: 0.5em;
  .recipe-app-menu-item {
    font-size: 0.5em;
    padding: 0;
    flex: 2 2 25%;
  }
}
@media (max-width: 600px) {
  .recipe-app-menu-item {
    font-size: 0.375rem;
  }
}
</style>
