<script setup>
import Link from "./ui/UILink.vue";
import Heading from "./ui/UIHeading.vue";
</script>
<template>
  <Heading
    title="What's for Dinner?"
    class="main-heading"
    alignment="left"
  ></Heading>
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
.main-heading {
  font-family: Cookie, Gabriola, Segoe Script, serif;
  color: brown;
  color: #2B2A4C;
  font-size: 2rem;
  padding-left: 2rem;
}

.recipe-app-menu {
  display: flex;
  flex-direction: row;
  gap: 1em;
  height: fit-content;
  width: fit-content;
  font-family: "Inter-Regular", "sans-serif";
  z-index: 1;
  padding: 0 1em 0 2em;
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
@media (max-width: 600px) {
  .main-heading {
    font-size: 3rem;
  }
}
@font-face {
  font-family: Cookie;
  src: url("../src/assets/fonts/Cookie/Cookie-Regular.ttf");
}
</style>
