<script setup>
import Heading from './ui/UIHeading.vue';
import Button from './ui/UIButton.vue';
import Input from './ui/UIInput.vue';
</script>
<template>
  <div class="recipe-search">
    <Heading tag="h2" title="Recipe Search" alignment="left" class="heading"/>
    <Input name="recipe" placeholder="recipe"/>
    <Input name="ingredient" placeholder="ingredient"/>
    <Button label="search"></Button>
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
