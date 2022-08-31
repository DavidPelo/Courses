import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/data.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  constructor(
    private dataService: DataService
  ) {}

  onSaveRecipes() {
    this.dataService.saveRecipes();
  }

  onFetchRecipes() {
    this.dataService.fetchRecipes().subscribe();
  }
}
