import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private passengerService: PassengerDashboardService,
    private activatedRoute: ActivatedRoute
  ) {}
  passenger: Passengers;

  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);

      this.passengerService
        .getPassenger(data['passengerId'])
        .subscribe((data: Passengers) => {
          this.passenger = data;
        });
    });

    // this.passengerService.getPassenger(1).subscribe((data: Passengers) => {
    //   this.passenger = data;
    // });
  }

  onUpdatehandler(value: Passengers) {
    this.passengerService
      .updatePassenger(value)
      .subscribe((data: Passengers) => {
        this.passenger = data;
      });
  }
}
