<script setup>
import { useRoute } from "vue-router";
import Heading from "./ui/UIHeading.vue";

import "material-icons/iconfont/round.css";

const url = useRoute();
const pageTitle = `"${url.name}" under construction`
console.log(pageTitle);
</script>

<template>
  <div class="under-construction">
    <Heading alignment="left" tag="h2" :title="pageTitle"></Heading>
    <span class="material-icons-round icon">construction</span>
  </div>
</template>

<style scoped>
.icon{
  font-size:10em;
}
</style>
