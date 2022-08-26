import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {
  count = 0;

  logCount() {
    this.count++;
    console.log('current count: ' + this.count);
  }
}