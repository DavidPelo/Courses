import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  intervalNum: number = 1;
  gameRunning: boolean = false;
  gameInterval;

  @Output() gameStarted = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  startGame() {
    if(!this.gameRunning) {
      this.gameInterval = setInterval(() => {
        this.gameStarted.emit(this.intervalNum++);
      }, 1000);
      this.gameRunning = true;
    }
  }

  endGame() {
    clearInterval(this.gameInterval);
    this.gameRunning = false;
  }
}
