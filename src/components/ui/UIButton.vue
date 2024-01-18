<script setup>
defineProps({
  btnType: {
    type: String,
    default: "button",
  },
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
  }
});
</script>
<template>
  <div class="ui-button">
    <button :type="btnType" :disabled="disabled" :primary="primary">{{ label.toLocaleUpperCase() }}</button>
  </div>
</template>

<style scoped>
.ui-button > button {
    background-color: #145FED;
    color: #eeeddd;
}
</style>
