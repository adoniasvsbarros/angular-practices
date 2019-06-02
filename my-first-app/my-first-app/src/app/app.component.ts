import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //selector: [app-root], //selecting by attribute ex: <div app-root>
  //selector: '.app-root', //selecting by class ex: <div class='app-root'>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*styles: [`
    h1 {
      color: dodgerblue;
    }
  `]*/
})
export class AppComponent {
  name = 'Adonias';
}
