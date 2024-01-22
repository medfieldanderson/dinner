<script setup>
import { onMounted, ref } from "vue";
import Heading from "./ui/UIHeading.vue";
import Button from "./ui/UIButton.vue";
import Input from "./ui/UIInput.vue";

// let recipeList = ref([]);

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

// onMounted(async () => {
//   const querySnapshot = await getDocs(collection(db, "recipes"));
//   let fbData = [];
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, doc.data());
//     fbData.push({
//       id: doc.id,
//       recipe: doc.data().recipe,
//       cuisine: doc.data().cuisine,
//     });
//   });
//   Object.assign(recipeList.value, fbData);
// });
</script>
<template>
  <div class="recipe-search">
    <Heading tag="h2" title="Recipe Search" alignment="left" class="heading" />
    <Input name="recipe" placeholder="recipe" />
    <Input name="ingredient" placeholder="ingredient" />
    <Button label="search"></Button>
    <!-- <ul>
      <template v-for="recipe in recipeList">
        <li>recipe: {{ recipe.recipe }}; category: {{ recipe.cuisine }}</li>
      </template>
    </ul> -->
  </div>
</template>

<style scoped>
.recipe-search {
  display: flex;
  flex-direction: column;
  border-top: 1px solid palegreen;
  margin: 0 1em;
  flex: 1;
}

.recipe-search > .heading {
  padding: 1em;
}
</style>
