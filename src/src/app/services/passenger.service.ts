import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private API_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  viewPassengerByUserName(username: string): Observable<any> {
    return this.http.get(`${this.API_URL}passenger/${username}`);
  }

   searchPassengerByUNandFlightId(username: string,flightId: number): Observable<any> {
    return this.http.get(`${this.API_URL}airline/${username}/${flightId}`);
  }
  createPassenger(passenger: Object): Observable<Object>{
    return this.http.post(`${this.API_URL}passenger/add`, passenger);
  }
}
