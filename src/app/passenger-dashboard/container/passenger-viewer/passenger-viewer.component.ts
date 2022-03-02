import { Component, OnInit } from '@angular/core';
import { Passengers } from '../../model/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['./passenger-viewer.component.css'],
  template: `
    <div>
      <passenger-form
        [detail]="passenger"
        (onUpdate)="onUpdatehandler($event)"
      ></passenger-form>
    </div>
  `,
})
export class PassengerViewerComponent implements OnInit {
  constructor(private passengerService: PassengerDashboardService) {}
  passenger: Passengers;

  ngOnInit() {
    this.passengerService.getPassenger(1).subscribe((data: Passengers) => {
      this.passenger = data;
    });
  }

  onUpdatehandler(value: Passengers) {
    this.passengerService
      .updatePassenger(value)
      .subscribe((data: Passengers) => {
        this.passenger = data;
      });
  }
}
