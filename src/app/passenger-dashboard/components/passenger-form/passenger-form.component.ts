import { Component, Input } from '@angular/core';
import { Passengers } from '../../model/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['./passenger-form.component.css'],
  template: `<div>
    <div>
      {{ detail | json }}
      <form #form="ngForm" (click)="test(form)">
        <div>
          <input type="text" name="fullname" [ngModel]="'sssssssss'" />
        </div>
        <div>
          <input type="number" name="id" [ngModel]="detail?.id" />
        </div>

        <!--
        <div>
          <label>
            Yes
            <input
              type="radio"
              name="checkedIn"
              [value]="true"
              [ngModel]="detail?.checkedIn"
              (ngModelChange)="toggleCheckedIn($event)"
            />
          </label>

          <label>
            No
            <input
              type="radio"
              name="checkedIn"
              [value]="false"
              [ngModel]="detail?.checkedIn"
              (ngModelChange)="toggleCheckedIn($event)"
          /></label>
        </div>  -->

        <div>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckedIn($event)"
          />
        </div>

        <div *ngIf="form.value.checkedIn">
          <input
            type="text"
            name="checkInDate"
            [ngModel]="detail?.checkInDate"
          />
        </div>
        {{ form.value | json }}
      </form>
    </div>
  </div>`,
})
export class PassengerFormComponent {
  @Input()
  detail: Passengers;

  test(value) {
    console.log(value);
  }

  toggleCheckedIn(value) {
    console.log(value);
    this.detail.checkInDate = Date.now();
  }
}
