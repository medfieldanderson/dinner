<script setup>
import UIBackdrop from "./components/ui/UIBackdrop.vue";
import UIContent from "./components/ui/UIContent.vue";
import UIHeading from "./components/ui/UIHeading.vue";
import MainMenu from "./components/MainMenu.vue";
</script>

<template>
  <div class="container">
    <UIHeading title="What's for Dinner?" class="main-heading"></UIHeading>
    <MainMenu class="main-menu" />
    <div class="recipe-app">
      <UIContent class="ui-content">
        <div class="main-content">
          <div class="recipe-app-content">
            <router-view></router-view>
          </div>
        </div>
      </UIContent>
      <!-- <UIBackdrop class="ui-backdrop"/> -->
    </div>
  </div>
</template>

<style scoped>
.main-heading {
  font-family: Cookie, Gabriola, Segoe Script, serif;
  color: brown;
  font-size: 4rem;
  margin-top: 2rem;
}
.main-menu {
  position: absolute;
  max-width: 100%;
  text-align: center;
}
.recipe-app {
  position: relative;
  max-width: 100%;
  min-width: 450px;
  margin: 0 auto;
  text-align: center;
  .main-content {
    display: inline-flex;
    flex-direction: row;
    margin-left: 4em;
    .recipe-app-content {
      font-family: Inter-Regular;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: center;
      width: 100%;
    }
  }
}



@media (max-width: 600px) {
  .main-heading {
    font-size: 3rem;
  }
}
</style>
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
