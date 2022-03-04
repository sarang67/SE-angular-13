import { Component } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div>
      <!-- our application start from here -->
      <!-- <passenger-dashboard></passenger-dashboard> -->
      <!--  <passenger-viewer></passenger-viewer> -->

      <nav class="nav">
        <a
          *ngFor="let item of nav"
          [routerLink]="item.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: item.exact }"
          >{{ item.name }}</a
        >
      </nav>
      <router-outlet> </router-outlet>
    </div>
  `,
  // templateUrl: './app.component.html',
})
export class AppComponent {
  nav: Nav[] = [
    { link: '/', exact: true, name: 'Home' },
    { link: '/passenger', exact: true, name: 'Passenger dashboard' },
    { link: '/oops', exact: false, name: '404' },
    { link: '/custom-pipe', exact: false, name: 'custom pipe' },
  ];
}
