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
      :class="{ primary: primary }"
      :style="{ float: alignment }"
    >
      {{ label.toLocaleUpperCase() }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
div.ui-button {
  --button-bg-color: rgb(214, 240, 240);
  --button-fg-color: #222;
  --button-border: navy;
  --primary-bg-color: #145fed;
  --primary-fg-color: #eeeeee;
  --disabled-bg-color: silver;
  --disabled-fg-color: gray;

  pointer-events: none;
  button {
    /* background-color: var(--primary-bg-color);
    color: var(--primary-fg-color); */
    background-color: var(--button-bg-color);
    color: var(--button-fg-color);
    pointer-events: all;
    font-family: inherit;
    font-size: 1em;
    cursor: pointer;
    border: 0.5px solid rgb(229, 221, 221);
    border-radius: 8px;
    transition: border-color 0.75s;
    margin: 0.5rem;
    padding: 0.5em 1em;

    /* filter: hue-rotate(65deg); */

    &.primary {
      background-color: var(--primary-bg-color);
      color: var(--primary-fg-color);
      /* filter: none; */
    }
    &:focus,
    &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
    &:hover {
      border: 1px solid var(--button-border);
      border-color: #8b8ece;
      filter: brightness(110%);
    }
    &:disabled {
      /* filter: grayscale(35%);
      color: gray; */
      cursor: not-allowed;
      background-color: var(--disabled-bg-color);
      color: var(--disabled-fg-color);
      border: 1px solid var(--disabled-bg-border);
    }
  }
}
</style>
