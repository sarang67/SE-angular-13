import { Injectable } from '@angular/core';
import { Passengers } from './model/passenger.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const PASSENGER_API: string = 'http://localhost:3000/passengers';

@Injectable({ providedIn: 'root' })
export class PassengerDashboardService {
  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  getPassengers(): Observable<Object> {
    return this.http.get(PASSENGER_API);
  }
}
