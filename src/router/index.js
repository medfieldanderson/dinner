import { createRouter, createWebHashHistory } from "vue-router";
import RecipeHome from "../components/RecipeHome.vue"
import RecipeSearch from "../components/RecipeSearch.vue";
import RecipeAdd from "../components/add/RecipeAdd.vue";
import RecipeSpotlight from "../components/RecipeSpotlight.vue";
import UnderConstruction from "../components/UnderConstruction.vue";

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
      path: "/spotlight/",
      name: "spotlight",
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
      component: UnderConstruction
    },
    {
      path: "/resources/",
      name: "resources",
      component: UnderConstruction
    },
    {
      path: "/takeout/",
      name: "takeout",
      component: UnderConstruction
    },
    {
      path: "/edit-recipe/:id",
      name: "edit-recipe",
      component: RecipeAdd
    },
  ],
});

export default router;
