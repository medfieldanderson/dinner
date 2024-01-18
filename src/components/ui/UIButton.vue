<script setup>
defineProps({
  btnType: {
    type: String,
    default: "button",
  },
  label: {
    type: String,
    default: "Ok",
  },
});
</script>
<template>
  <div class="ui-button">
    <button type="{{ btnType }}">{{ label.toLocaleUpperCase() }}</button>
  </div>
</template>

<style scoped>
.ui-button > button {
    background-color: #145FED;
    color: #eeeddd;
}
</style>
