import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  clicks: Date[] = [];

  onShowDetails() {
    this.showDetails = !this.showDetails;
    this.clicks.push(new Date());
  }
}
