export const Recipe = class {
  constructor(name, cuisine, category, ingredients, instructions, tags) {
    this.name = name;
    this.cuisine = cuisine;
    this.category = category;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.tags = tags;
  }
  getIngredients() {
    return this.ingredients;
  }
  getInstructions() {
    return this.instructions;
  }
};
