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
      :style="{ float: alignment }"
    >
      {{ label.toLocaleUpperCase() }}
    </button>
  </div>
</template>

<style scoped>
.ui-button > button {
  &.btn {
    font-family: inherit;
    font-size: 1em;
    cursor: pointer;
    transition: border-color 0.75s;

    margin: 0.5rem;
    border: 0.5px solid rgb(229, 221, 221);
    border-radius: 8px;
    padding: 0.6em 1.2em;

    &:hover {
      background-color: #ecf0f7;
      border: 1px solid navy;
      border-color: #646cff;
    }
    &:focus,
    &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    } 
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
