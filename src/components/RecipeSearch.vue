<script setup>
import UIHeading from './ui/UIHeading.vue';
import UIButton from './ui/UIButton.vue';
import UIInput from './ui/UIInput.vue';
</script>
<template>
  <div class="recipe-search">
    <UIHeading title="Recipe Search" />
    <UIInput name="recipe" placeholder="recipe"/>
    <UIInput name="ingredient" placeholder="ingredient"/>
    <UIButton label="search"></UIButton>
  </div>
</template>

<style scoped>
.recipe-search {
    display: flex;
    flex-direction: column;
    border: 1px solid palegreen;
    margin: 1em;
    flex: 1;
}
.recipe-search > * {
  padding: 0.5em;
  width: cover;
}
</style>
