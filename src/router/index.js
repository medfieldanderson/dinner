import { createRouter, createWebHashHistory } from "vue-router";
import RecipeHome from "../components/RecipeHome.vue"
import RecipeSearch from "../components/RecipeSearch.vue";
import RecipeAdd from "../components/RecipeAdd.vue";
import RecipeSpotlight from "../components/RecipeSpotlight.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: RecipeHome
    },
    {
      path: "/search/",
      name: "search",
      component: RecipeSearch,
    },
    {
      path: "/suggestions/",
      name: "suggestions",
      component: RecipeSpotlight,
    },
    {
      path: "/add-recipe/",
      name: "add-recipe",
      component: RecipeAdd,
    },
    {
      path: "/cocktails/",
      name: "cocktails",
    },
  ],
});

export default router;
