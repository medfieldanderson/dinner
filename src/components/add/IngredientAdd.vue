<script setup>
import { computed, ref } from "vue";
import Heading from "../ui/UIHeading.vue";
import Input from "../ui/UIInput.vue";
import Button from "../ui/UIButton.vue";

import { uid } from "uid/secure";

const props = defineProps({
  ingredients: {
    type: Array,
    require: true,
  },
});

const emit = defineEmits(["add-ingredient"]);

const ingredient = ref({
  id: "",
  item: "",
  qty: null,
  unit: "",
});

const clearIngredient = () => {
  ingredient.value = {};
  document.getElementById("item").focus();
};

const addIngredient = () => {
console.log("props.ingredients", props.ingredients);
  const { item, qty, unit } = ingredient.value;
  const newIngredient = {
    id: uid(10),
    item: item,
    qty: qty,
    unit: unit,
  };

  emit("add-ingredient", newIngredient);
  clearIngredient();
};

const closeModal = () => {
  document.getElementById("add-ingredients-modal").close();
};

const isAddIngredientEnabled = computed(() => {
 return !!ingredient.value.item && ingredient.value.qty > 0 && !!ingredient.value.unit;
});
</script>
<template>
  <dialog id="add-ingredients-modal">
    <form @submit.prevent="addIngredient">
      <div class="ingredient-list">
        <Heading title="Ingredient List" alignment="left" class="sub-heading" />
        <Input
          id="item"
          name="item"
          type="text"
          placeholder="ingredient name"
          v-model.lazy="ingredient.item"
        />
        <Input
          id="qty"
          name="qty"
          type="number"
          placeholder="quantity"
          v-model.lazy="ingredient.qty"
        />
        <Input
          id="unit"
          name="unit"
          type="text"
          placeholder="unit"
          v-model.lazy="ingredient.unit"
        />
        <Button type="submit" label="add ingredient" :primary="true" :disabled="!isAddIngredientEnabled" />
        <slot name="ingredient-list"></slot>
      </div>
      <Button
        id="close-ingredient-modal"
        label="Close"
        alignment="right"
        @click="closeModal"
      />
    </form>
  </dialog>
</template>

<style scoped></style>
