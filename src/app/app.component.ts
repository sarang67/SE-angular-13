import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div>
      <!-- our application start from here -->
      <!-- <passenger-dashboard></passenger-dashboard> -->
      <passenger-viewer></passenger-viewer>
    </div>
  `,
  // templateUrl: './app.component.html',
})
export class AppComponent {}
