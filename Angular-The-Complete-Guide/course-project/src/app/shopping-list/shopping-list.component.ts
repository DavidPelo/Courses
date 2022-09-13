import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { LoggingService } from "../logging.service";
import { ShoppingListService } from "../services/shopping-list.service";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  ingredientsSub: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

    this.loggingService.printLog('shopping list')
  }

  ngOnDestroy(): void {
    this.ingredientsSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
