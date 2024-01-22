<script setup>

const model = defineModel();
defineProps({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
  },
  required: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "text",
  },
  value: {
    type: String,
  },
});
</script>

<template>
  <input
    class="ui-input"
    :id="id"
    :name="name"
    :type="type"
    :disabled=disabled
    :placeholder="placeholder"
    :required="required"
    v-model="model"
  />
</template>

<style scoped>
.ui-input {
  border: 1px solid orange;
  border-radius: 5px;
  padding: 0.75rem;
  margin: 0.25em 0.25em 0 0 ;
  font-size: 1em;
}

.ui-input:disabled {
  background-color: bisque;
}
</style>
