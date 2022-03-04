import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passengers } from '../../model/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['./passenger-dashboard.component.css'],
  template: `
    <div>
      <passenger-count [items]="passengers"></passenger-count>

      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (onEdit)="onEditHandler($event)"
        (onDelete)="onDeleteHandler($event)"
        (onView)="onViewhandler($event)"
      >
      </passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passengers[] = [];
  constructor(
    private passengerDashboardService: PassengerDashboardService,
    private router: Router
  ) {}

  ngOnInit() {
    this.passengerDashboardService
      .getPassengers()
      .subscribe((data: Passengers[]) => {
        this.passengers = data;
      });
  }

  onEditHandler(event: Passengers) {
    this.passengerDashboardService.updatePassenger(event).subscribe((data) => {
      console.log(data);
      this.passengers = this.passengers.map((passenger) => {
        if (passenger.id === event.id) {
          passenger = { ...event };
        }
        return passenger;
      });
    });
  }

  onDeleteHandler(event: Passengers) {
    this.passengerDashboardService.removePassenger(event).subscribe((data) => {
      this.passengers = this.passengers.filter((passenger) => {
        return passenger.id !== event.id;
      });
    });
  }

  onViewhandler(event: Passengers) {
    console.log(event);
    this.router.navigate(['/passenger', event.id]); //passenger/1
  }
}
