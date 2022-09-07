import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../services/auth.service";
import { DataService } from "../shared/data.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onSaveRecipes() {
    this.dataService.saveRecipes();
  }

  onFetchRecipes() {
    this.dataService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
