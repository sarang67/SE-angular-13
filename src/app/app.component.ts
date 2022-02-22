import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="app">
      <button (click)="handleClick(username.value)">Get value</button>
      <input type="text" #username />
      <div>{{ name }}</div>
    </div>
  `,
  // templateUrl: './app.component.html',
})
export class AppComponent {
  name: string = 'sarangs';
  handleClick(value: string) {
    console.log(value);
    this.name = value;
  }
}
