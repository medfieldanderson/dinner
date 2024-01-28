<script setup>
import { ref } from "vue";
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
          v-model="ingredient.item"
        />
        <Input
          id="qty"
          name="qty"
          type="number"
          placeholder="quantity"
          v-model="ingredient.qty"
        />
        <Input
          id="unit"
          name="unit"
          type="text"
          placeholder="unit"
          v-model="ingredient.unit"
        />
        <Button type="submit" label="add ingredient" :primary="true" />
        <slot name="ingredient-list"></slot>
        <!-- <ul class="item-list">
          <template v-for="ingredient in ingredients">
            <li class="list-item">
              {{ ingredient.qty }}
              {{ ingredient.unit }}
              {{ ingredient.item }}
            </li>
          </template>
        </ul> -->
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
