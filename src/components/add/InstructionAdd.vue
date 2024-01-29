<script setup>
import { computed, ref } from "vue";
import Heading from "../ui/UIHeading.vue";
import Input from "../ui/UIInput.vue";
import Button from "../ui/UIButton.vue";

import { uid } from "uid/secure";

const props = defineProps({
  instructions: {
    type: Array,
    require: true,
  },
});

const emit = defineEmits(["add-instruction"]);

const instruction = ref({
  id: "",
  action: "",
  sort: null,
});

const clearInstruction = () => {
  instruction.value = {};
  document.getElementById("action").focus();
};

const addInstruction = () => {
  const { action, sort } = instruction.value;
  const newInstruction = { id: uid(10), action: action, sort: sort };
  emit("add-instruction", newInstruction);
  clearInstruction();
};

const closeModal = () => {
  document.getElementById("add-instructions-modal").close();
};

const isAddInstructionEnabled = computed(() => {
  return !!instruction.value.action && instruction.value.sort > 0;
});
</script>

<template>
  <dialog id="add-instructions-modal">
    <form @submit.prevent="addInstruction">
      <div class="instruction-list">
        <Heading
          title="Instruction List"
          alignment="left"
          class="sub-heading"
        />
        <Input
          id="action"
          name="action"
          type="text"
          placeholder="instruction"
          v-model="instruction.action"
        />
        <Input
          id="sort"
          name="sort"
          type="number"
          placeholder="order"
          v-model="instruction.sort"
        />
        <Button label="add instruction" type="submit" :primary="true" :disabled="!isAddInstructionEnabled" />
        <Button
          class="close-instruction-modal"
          label="close"
          alignment="right"
          @click="closeModal"
        />
        <slot name="instruction-list"></slot>
      </div>
    </form>
  </dialog>
</template>

<style scoped></style>
