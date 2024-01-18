<script setup>
import UIHeading from './ui/UIHeading.vue';
import UIButton from './ui/UIButton.vue';
</script>
<template>
  <div class="recipe-box">
    <UIHeading title="Recipe Box"/>
    <UIButton label="add" />
  </div>
</template>

<style scoped>
.recipe-box{
    border: 1px solid darkorange;
    margin: 1em;
    flex: 1;
}
</style>
