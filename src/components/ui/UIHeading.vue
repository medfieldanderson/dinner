<script setup>

defineProps({
  alignment: {
    type: String,
    default: "center"
  },
  tag: {
    type: String,
    default: "h3"
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="ui-heading">
    <component :is="tag" :style="{'text-align': alignment}">{{ title }}</component>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  margin: 0;
  padding: 0;
}

</style>
