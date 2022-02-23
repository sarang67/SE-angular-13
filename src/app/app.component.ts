import { Component } from '@angular/core';

interface Child {
  name: string;
  age: number;
}

interface Passengers {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate: number | null;
  children: Child[] | null;
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <h3>Airlines passengers</h3>
    <ul>
      <li *ngFor="let passenger of passengers; let i = index">
        <span class="status" [class.checked-in]="passenger.checkedIn"></span>
        {{ i }} {{ passenger.fullname }}

        <div class="date">
          {{
            passenger.checkInDate
              ? (passenger.checkInDate | date: 'yMMMMd' | uppercase)
              : 'not checked in'
          }}
        </div>

        <div class="children">
          {{ passenger.children?.length || 0 }}
        </div>
      </li>
    </ul>
  `,
  // templateUrl: './app.component.html',
})
export class AppComponent {
  passengers: Passengers[] = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ];
}
