import { Component, Input } from '@angular/core';
import { Passengers } from '../../model/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['./passenger-detail.component.css'],
  template: `<div>
    <span class="status" [class.checked-in]="detail.checkedIn"></span>
    {{ detail.fullname }}

    <div class="date">
      {{
        detail.checkInDate
          ? (detail.checkInDate | date: 'yMMMMd' | uppercase)
          : 'not checked in'
      }}
    </div>

    <div class="children">
      {{ detail.children?.length || 0 }}
    </div>
  </div>`,
})
export class PassengerDetailComponent {
  @Input()
  detail: Passengers;
}
