import { Injectable } from '@angular/core';
import { Passengers } from './model/passenger.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const PASSENGER_API: string = 'http://localhost:3000/passengers';

const httpOption = {
  headers: new HttpHeaders({
    Pragma: 'private',
    'Content-Type': 'application/json',
    'x-authentication-cod': 'my auhhenticcation key',
  }),
};

@Injectable({ providedIn: 'root' })
export class PassengerDashboardService {
  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  getPassengers(): Observable<any> {
    return this.http.get(PASSENGER_API, httpOption);
  }

  getPassenger(id) {
    return this.http.get(`${PASSENGER_API}/${id}`);
  }

  updatePassenger(passenger: Passengers) {
    return this.http.put(
      `${PASSENGER_API}/${passenger.id}`,
      passenger,
      httpOption
    );
  }

  removePassenger(passenger: Passengers) {
    return this.http.delete(`${PASSENGER_API}/${passenger.id}`, httpOption);
  }
}
