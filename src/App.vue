<script setup>
import UIHeading from "./components/ui/UIHeading.vue";
import MainMenu from "./components/MainMenu.vue";
</script>

<template>
  <div class="recipe-app">
    <MainMenu class="main-menu" />
    <UIHeading title="What's for Dinner?" class="main-heading"></UIHeading>
    <div class="main-content">
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
  position: relative;
  max-width: 100%;
  min-width: 450px;
  margin: 0 auto;
  text-align: center;
  .main-menu {
    display: inline;
    left: 0;
    /* top: 0; */
    position: absolute;
    max-width: 100%;
    text-align: center;
    margin-left: 1em;
  }
}
.main-heading {
  font-family: Cookie, Gabriola, Segoe Script, serif;
  color: brown;
  font-size: 4rem;
  margin-top: 2rem;
}
.main-content {
  display: inline-flex;
  flex-direction: row;
  margin-left: 4em;
}
.recipe-app-content {
  font-family: Inter-Regular;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  width: 100%;
  height: 70vh;
}
@media (max-width: 600px) {
  .main-heading {
    font-size: 3rem;
  }
}
</style>
