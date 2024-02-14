<script setup>
import UIBackdrop from "./components/ui/UIBackdrop.vue";
import UIContent from "./components/ui/UIContent.vue";
import Heading from "./components/ui/UIHeading.vue";
import MainMenu from "./components/MainMenu.vue";
</script>

<template>
  <header class="nav-header">
    <Heading
      title="What's for Dinner?"
      class="main-heading"
      alignment="left"
    ></Heading>
    <MainMenu class="main-menu" />
  </header>
  <div class="container">
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
<style>
:root {
  --ui-heading-title: #637a9f;
  --ui-heading-title: #ee7214;
  --ui-heading-title: #e8c872;
  --ui-heading-title: #bfcfe7;
  --ui-heading-title: #743c3c;
  --ui-heading-title: brown;
  --ui-link-color: #fe7a36;
  --ui-link-color: #ff8911;
  --ui-link-color: #ed7d31;
  --ui-link-color: #ee7214;
  --ui-link-color: #525ceb;
  --ui-link-color: #405576;
  --ui-link-color: #363062;
  --ui-link-color: #607274;
  --ui-link-color: brown;
  --ui-link-shadow: #405576;

  --ui-dialog-background: #bfcfe7;
}
</style>

<style lang="scss" scoped>
.nav-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
}
.container {
  display: flex;
}
.main-heading {
  font-family: Cookie, Gabriola, Segoe Script, serif;
  color: var(--ui-heading-title);
  font-size: 2.5rem;
  padding: 1rem 2rem;
  text-shadow: 1px 1px 5px var(--ui-link-color);
  // 1px 1px 5px var(--ui-link-shadow);
}

.main-menu {
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
    // margin-left: 4em;
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
</style>
<style>
.recipe-search {
  .recipe-results {
    .result {
      background-color: #fefdfc;
    }
  }
}

@font-face {
  font-family: Inter-Regular;
  src: url("../src/assets/fonts/Inter/static/Inter-Regular.ttf");
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
dialog {
  border: 1px solid navy;
  border-radius: 15px;
  /* background-color: rgb(255, 235, 205, 80%); */
  background-color: var(--ui-dialog-background);
  backdrop-filter: blur(3px);
  box-shadow: 10px 5px 5px var(--ui-link-shadow);

  width: 30rem;
  &::backdrop {
    background: rgb(66, 71, 105, 55%);
  }
}
</style>
