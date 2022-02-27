import { Component, OnInit } from '@angular/core';
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
      >
      </passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passengers[] = [];
  constructor(private passengerDashboardService: PassengerDashboardService) {}

  ngOnInit() {
    this.passengerDashboardService
      .getPassengers()
      .subscribe((data: Passengers[]) => {
        this.passengers = data;
      });
  }

  onEditHandler(event: Passengers) {
    this.passengers = this.passengers.map((passenger) => {
      if (passenger.id === event.id) {
        passenger = { ...event };
      }
      return passenger;
    });
  }

  onDeleteHandler(event: Passengers) {
    this.passengers = this.passengers.filter((passenger) => {
      return passenger.id !== event.id;
    });
  }
}
