<script setup>

defineProps({
  title: {
    type: String,
    required: true,
  },
  alignment: {
    type: String,
    default: "center"
  }
});
</script>

<template>
  <div class="ui-heading">
    <h3 :style="{'text-align': alignment}">{{ title }}</h3>
  </div>
</template>

<style scoped>
h3 {
  margin: 0;
  padding: 0;
}

</style>
