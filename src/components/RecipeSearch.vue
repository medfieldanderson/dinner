<script setup>
import UIHeading from './ui/UIHeading.vue';
import UIButton from './ui/UIButton.vue';
import UIInput from './ui/UIInput.vue';
</script>
<template>
  <div class="recipe-search">
    <UIHeading title="Recipe Search" alignment="left" class="heading"/>
    <UIInput name="recipe" placeholder="recipe"/>
    <UIInput name="ingredient" placeholder="ingredient"/>
    <UIButton label="search"></UIButton>
  </div>
</template>

<style scoped>
.recipe-search {
    display: flex;
    flex-direction: column;
    border-top: 1px solid palegreen;
    margin: 0 1em;
    flex: 1;
}

.recipe-search > .heading {
  padding: 1em;
}
</style>
