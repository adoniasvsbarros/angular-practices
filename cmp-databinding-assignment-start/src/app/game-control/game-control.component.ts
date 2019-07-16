import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('startClicked') start = new EventEmitter<number>(); 
  count = 0;
  timer;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.timer = setInterval(()=>{
      this.count++;
      this.start.emit(this.count);
    }, 1000);
    
  }

  onEndGame(){
    clearInterval(this.timer);
  }

}
