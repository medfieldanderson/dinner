<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "Ok",
  },
  primary: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "button",
  }
});
</script>
<template>
  <div class="ui-button">
    <button :type="type" :disabled=disabled :primary="primary">{{ label.toLocaleUpperCase() }}</button>
  </div>
</template>

<style scoped>
.ui-button > button {
    background-color: #145FED;
    color: #eeeddd;
}
</style>
