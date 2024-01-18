import { defineStore } from "pinia";
import recipes from "../mock/recipes.json";

export const useRecipeStore = defineStore("RecipeStore", {
  state: () => {
    return {
      recipes: recipes,
    };
  },
  actions:{},
  getters:{}
});
