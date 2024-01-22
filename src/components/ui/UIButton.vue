<script setup>
defineProps({
  alignment: {
    type: String,
    default: "center",
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
    default: false,
  },
  type: {
    type: String,
    default: "button",
  },
});
</script>
<template>
  <div class="ui-button">
    <button
      :type="type"
      :disabled="disabled"
      class="btn"
      :class="{ 'btn-primary': primary }"
      :style="{ 'float': alignment }"
    >
      {{ label.toLocaleUpperCase() }}
    </button>
  </div>
</template>

<style scoped>
.ui-button > button {
  &.btn {
    margin: 0.5rem;
  }
  /* background-color: silver; */
  color: #145fed;
  border: 1px solid black;
  &:hover {
    background-color: silver;
  }
  &.btn-primary {
    background-color: #145fed;
    color: #eeeddd;
    &:hover {
      background-color: #063ea5;
    }
  }
}
</style>
