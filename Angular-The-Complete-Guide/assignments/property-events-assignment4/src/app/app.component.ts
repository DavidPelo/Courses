import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  emittedNumbers = [];

  onGameStarted(emittedNumber: number) {
    const evenOrOdd = emittedNumber % 2 === 0 ? "Even" : "Odd";

    this.emittedNumbers.push({
      evenOrOdd: evenOrOdd,
      value: emittedNumber,
    });
  }
}
