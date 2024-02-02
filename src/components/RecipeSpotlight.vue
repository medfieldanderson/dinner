<script setup>
import { ref, onMounted } from "vue";
import Heading from "./ui/UIHeading.vue";
import ListItem from "./ui/UIListItem.vue";

// const recipeList = ref([]);
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

onMounted(async () => {
  // const querySnapshot = await getDocs(collection(db, "recipes"));
  // let fbData = [];
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, doc.data());
  //   fbData.push({
  //     id: doc.id,
  //     recipe: doc.data().recipe,
  //     cuisine: doc.data().cuisine,
  //   });
  // });
  // Object.assign(recipeList.value, fbData);
});
</script>
<template>
  <div class="recipe-spotlight">
    <!-- <Heading
      tag="h2"
      title="Recipe Spotlight"
      alignment="left"
      class="heading"
    /> -->
    <Heading tag="h2" title="Recipe Spotlight" class="heading" />
    <ul>
      <li>mac and cheese</li>
      <li>ground meat stew</li>
      <li>caeser salad w/ croutons</li>
      <li>ginia surprise</li>
      <li>chili</li>
      <!-- <template v-for="item in recipeList">
        <li>{{ item.recipe }}</li>
      </template> -->
    </ul>
  </div>
  <div>
    <ul>
      <ListItem id="mc">mac and cheese</ListItem>
      <ListItem id="c">chili</ListItem>
      <ListItem id="mc2">mac and cheese</ListItem>
    </ul>
  </div>
</template>

<style scoped>
.recipe-spotlight {
  border-top: 1px solid slateblue;
  margin: 0 1em;
  flex: 1;
  ul {
    padding-inline-start: 1rem;
    li {
      text-align: left;
      list-style-type: decimal;
      margin: auto 1rem;
      padding: 0.25rem;
      &:hover {
        background-color: #f5e6cb;
        border-radius: 5px;
      }
    }
  }
  .heading {
    padding: 1em;
  }
}


</style>
