import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { RecipesService } from "../services/recipes.service";

@Injectable({ providedIn: "root" })
export class DataService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipesService
  ) {}

  baseUrl = "https://angular-course-project-b7f42-default-rtdb.firebaseio.com/";

  fetchRecipes() {
    return this.http.get<Recipe[]>(`${this.baseUrl}recipes.json`).pipe(
      map((recipes) =>
        recipes ? recipes.map((recipe) => ({ ingredients: [], ...recipe })) : []
      ),
      tap((recipes) => this.recipeService.setRecipes(recipes))
    );
  }

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(`${this.baseUrl}recipes.json`, recipes)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
