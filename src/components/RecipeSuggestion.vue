<script setup>
import UIHeading from './ui/UIHeading.vue';
</script>
<template>
  <div class="recipe-highlight">
    <UIHeading title="Recipe Suggestions" />
    <ul>
      <li>mac and cheese</li>
      <li>ground meat stew</li>
      <li>caeser salad w/ croutons</li>
      <li>ginia surprise</li>
      <li>chili</li>
    </ul>
  </div>
</template>

<style scoped>
.recipe-highlight {
  border: 1px solid slateblue;
  margin: 1em;
  flex: 1;
}

.recipe-highlight > ul {
  padding-inline-start: 0;
}
.recipe-highlight > ul > li {
  list-style-type: none;
  /* text-align: center; */
  border-bottom: 1px dotted blue;
}
.recipe-highlight > ul > li:hover {
  list-style-type: none;
  /* text-align: center; */
  background-color: #f5e6cb;
  border-radius: 5px;
  border-bottom: 1px dotted blue;
}
</style>
