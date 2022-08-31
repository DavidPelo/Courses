import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { DataService } from '../shared/data.service';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: "root" })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(private dataService: DataService, private recipeService: RecipesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();

    if(recipes.length === 0) {
      return this.dataService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
