import { Component } from '@angular/core';
import { typescriptSE } from './learningtypescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-SE-project';
  constructor() {
    typescriptSE();
  }
}
