<script setup>
import UIHeading from './ui/UIHeading.vue';
import UIButton from './ui/UIButton.vue';
</script>
<template>
  <div class="recipe-add">
    <UIHeading title="Recipe Box" alignment="left" class="heading"/>
    <UIButton label="add" />
  </div>
</template>

<style scoped>
.recipe-add{
    border-top: 1px solid darkorange;
    margin: 0 1em;
    flex: 1;
}
.recipe-add > .heading {
  padding: 1em;
}

</style>
