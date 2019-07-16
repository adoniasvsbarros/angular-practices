import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0
  oddNumbers: number[] = []
  evenNumbers: number[] = []

  onGameStarted(number: number){
    if(number % 2 === 0){
      this.oddNumbers.push(number)
    } else {
      this.evenNumbers.push(number)
    }
  }
}
