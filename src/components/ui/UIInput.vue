<script setup>
defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
  }
});
</script>

<template>
  <div class="ui-input">
    <input :type="type" :placeholder="placeholder" required=true />
  </div>
</template>

<style scoped>
.ui-input > input {
    border: 1px solid orange;
    border-radius: 5px;
    padding: 0.25rem;
}
</style>
