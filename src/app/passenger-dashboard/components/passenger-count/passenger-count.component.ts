import { Component, Input } from '@angular/core';
import { Passengers } from '../../model/passenger.interface';

@Component({
  selector: 'passenger-count',
  template: `<div>
    <h3>Airlines passengers</h3>
    Total CheckedIn:{{ checkedInCount() }} / {{ items.length }}
  </div>`,
})
export class PassengerCountComponent {
  @Input()
  items: Passengers[];

  checkedInCount() {
    let checkedInPassenger = this.items.filter((passenger) => {
      return passenger.checkedIn;
    });

    return checkedInPassenger.length;
  }
}
