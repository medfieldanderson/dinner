<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  }, 
  placeholder: {
    type: String,
  }, 
  type: {
    type: String,
    default: "text",
  },
  value: {
    type: String,
  }
});
</script>

<template>
  <div class="ui-input">
    <input :type="type" :disabled="disabled" :placeholder="placeholder" :value="value" required=true />
  </div>
</template>

<style scoped>
.ui-input > input {
    border: 1px solid orange;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1em;
}

.ui-input > input:disabled {
  background-color: bisque;
}
</style>
