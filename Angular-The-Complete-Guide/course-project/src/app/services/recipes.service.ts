import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipesService {

  private recipes: Recipe[] = [
    new Recipe(
      "spagette",
      "noods",
      "https://recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg",
      [new Ingredient("Meat", 1), new Ingredient("noddles", 4)]
    ),
    new Recipe(
      "spagette2",
      "noods",
      "https://recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg",
      [new Ingredient("Meat", 1), new Ingredient("noddles", 4)]
    ),
  ];
  
  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {}

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.getRecipes())
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(idx: number) {
    return this.recipes[idx];
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.getRecipes());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsFromRecipe(ingredients);
  }
}
