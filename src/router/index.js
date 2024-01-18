import { createRouter, createWebHashHistory } from "vue-router";
import RecipeSearch from "../components/RecipeSearch.vue";
import RecipeBox from "../components/RecipeBox.vue";
import RecipeSuggestion from "../components/RecipeSuggestion.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/search/",
      name: "search",
      component: RecipeSearch,
    },
    {
      path: "/suggestions/",
      name: "suggestions",
      component: RecipeSuggestion,
    },
    {
      path: "/add-recipe/",
      name: "add-recipe",
      component: RecipeBox,
    },
    {
      path: "/cocktails/",
      name: "cocktails",
    },
  ],
});

export default router;
