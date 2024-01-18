<script setup>

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="ui-heading">
    <h3>{{ title }}</h3>
  </div>
</template>

<style scoped>
h3 {
  margin: 0;
  padding: 0;
}
</style>
