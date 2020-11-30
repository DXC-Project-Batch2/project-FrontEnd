import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
 // private Url = 'http://localhost:9092/flight';

  private API_URL = 'http://localhost:8080/';

  
  constructor(private http: HttpClient) { }

  viewFlight(planeId: number): Observable<any> {
    return this.http.get(`${this.API_URL}/airline/${planeId}`);
  }

  createFlight(airline: Object): Observable<Object>{
    return this.http.post(`${this.API_URL}airline/add`, airline);
  }

  updateFlight(airline: Object): Observable<Object>{
    return this.http.put(`${this.API_URL}airline/update`, airline);
  }

  deleteFlight(planeId: number): Observable<any>{
    return this.http.delete(`${this.API_URL}airlineDelete/${planeId}`, { responseType: 'text' });
  }

  getFlight(planeId: number): Observable<any>{
    return this.http.get(`${this.API_URL}airline/${planeId}`);
  }

  ListAllFlights(): Observable<any> {
    return this.http.get(`${this.API_URL}airline`);
  }

  viewFlightByUser(source: string,destination: string): Observable<any> {
    return this.http.get(`${this.API_URL}airline/${source}/${destination}`);
  }

  searchFlightBydate(source: string,destination: string,date:string): Observable<any> {
    return this.http.get(`${this.API_URL}airline/${source}/${destination}/${date}`);
  }
}
