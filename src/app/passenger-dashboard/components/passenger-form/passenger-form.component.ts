import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Baggage } from '../../model/baggage.interface';
import { Passengers } from '../../model/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['./passenger-form.component.css'],
  template: `<div>
    <div>
      {{ detail | json }}
      <form
        #form="ngForm"
        (dblclick)="test(form)"
        (ngSubmit)="handleSubmit(form.value, form.valid)"
      >
        <div>
          <input
            type="text"
            name="fullname"
            [ngModel]="detail?.fullname"
            #userName="ngModel"
            (click)="test2(userName)"
            required
          />
          {{ userName.errors | json }}
          <div
            *ngIf="userName.errors?.['required'] && userName.dirty"
            class="error"
          >
            User Name is required
          </div>
        </div>
        <div>
          <input
            type="number"
            name="id"
            [ngModel]="detail?.id"
            required
            #id="ngModel"
          />

          {{ id.errors | json }}
          <div class="error" *ngIf="id.errors?.['required']">
            ID is required
          </div>
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

        <div>
          <select name="baggage" [ngModel]="detail?.baggage">
            <option *ngFor="let item of baggage" [value]="item.key">
              {{ item.value }}
            </option>
          </select>
        </div>

        <div>{{ form.value | json }}</div>
        <div>{{ form.valid | json }}</div>
        <div>{{ form.invalid | json }}</div>

        <button type="submit" [disabled]="form.invalid">
          Update Passenger Detail
        </button>
      </form>
    </div>
  </div>`,
})
export class PassengerFormComponent {
  @Input()
  detail: Passengers;

  @Output()
  onUpdate = new EventEmitter();

  baggage: Baggage[] = [
    { key: 'none', value: 'No Baggae' },
    { key: 'hand-only', value: 'Hand Baggage' },
    { key: 'hold-only', value: 'Hold Haggae' },
    { key: 'hand-hold', value: 'hand and Hold Baggae' },
  ];

  // for check form ngForm object
  test(value) {
    console.log(value);
  }

  // for check form input object
  test2(userName) {
    console.log(userName);
  }

  toggleCheckedIn(value) {
    console.log(value);
    this.detail.checkInDate = Date.now();
  }

  handleSubmit(passenjerObj: Passengers, isvalid: boolean) {
    console.log(passenjerObj, isvalid);
    if (isvalid) {
      this.onUpdate.emit(passenjerObj);
    }
  }
}
