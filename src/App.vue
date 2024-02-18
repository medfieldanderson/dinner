<script setup>
import UIBackdrop from "./components/ui/UIBackdrop.vue";
import UIContent from "./components/ui/UIContent.vue";
import Heading from "./components/ui/UIHeading.vue";
import MainMenu from "./components/MainMenu.vue";

import router from "./router";

const navigateHome = () => {
  console.log("navigate home");
  router.push("/");
};
</script>

<template>
  <header class="nav-header">
    <Heading
      title="What's for Dinner?"
      class="main-heading"
      alignment="left"
      @click="navigateHome"
    ></Heading>
    <MainMenu class="main-menu" />
  </header>
  <UIContent class="ui-content">
    <router-view></router-view>
  </UIContent>
  <!-- <UIBackdrop class="ui-backdrop"/> -->
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
.main-heading {
  cursor: pointer;
  font-family: Cookie, Gabriola, Segoe Script, serif;
  color: var(--ui-heading-title);
  font-size: 2.5rem;
  padding: 1rem 2rem;
  text-shadow: 1px 1px 5px var(--ui-link-color);
}

.main-menu {
  max-width: 100%;
  text-align: center;
}
.ui-content {
  font-family: inherit;
  
  position: relative;
  margin: 0 auto;
  text-align: center;
}

</style>
<style>
/* .recipe-search {
  .recipe-results {
    .result {
      background-color: #fefdfc;
    }
  }
} */

@font-face {
  font-family: Inter-Regular;
  src: url("../src/assets/fonts/Inter/static/Inter-Regular.ttf");
}
/* @media (max-width: 600px) {
  .main-heading {
    font-size: 3rem;
  }
} */
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
