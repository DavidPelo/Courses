import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInceptorService } from "./auth/auth-interceptor.service";
import { RecipesService } from "./services/recipes.service";
import { ShoppingListService } from "./services/shopping-list.service";

@NgModule({
  providers: [
    ShoppingListService,
    RecipesService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInceptorService, multi: true },
  ],
})
export class CoreModule {}
