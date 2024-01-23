<script setup>
import UIHeading from "./components/ui/UIHeading.vue";
import MainMenu from "./components/MainMenu.vue";
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
  font-family: Cookie, Gabriola, Segoe Script, serif;
  color: brown;
  font-size: 4rem;
  margin-top: 3rem;
}
.main-content {
  display: flex;
  flex-direction: row;
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
</style>
<style>
dialog {
  border: 3px solid navy;
  border-radius: 15px;
  background-color: rgb(255, 235, 205, 80%);
  width: 30rem;
  &::backdrop {
    background: rgb(66, 71, 105, 45%);
  }
}
</style>
