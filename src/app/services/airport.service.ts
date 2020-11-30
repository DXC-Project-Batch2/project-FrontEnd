import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airport } from '../model/airport.component';

@Injectable({
  providedIn: 'root'
})

export class AirportService{

  private baseUrl = 'http://localhost:8080/';
  constructor(private http:HttpClient){}

  //Returns list of all airports
  getAllAirports():Observable<Airport[]>{
    return this.http.get<Airport[]>(`${this.baseUrl}allAirport`);
}

viewAirport(airportCode: string): Observable<any> {
  return this.http.get(`${this.baseUrl}airport/${airportCode}`);
}

addAirport(airport: Object): Observable<Object> {
  return this.http.post(`${this.baseUrl}airport/add`,airport);
}

modifyAirport(airport: Object): Observable<Object> {
  return this.http.put(`${this.baseUrl}airport/update`, airport);
}

removeAirport(airportCode: string): Observable<any> {
  return this.http.delete(`${this.baseUrl}airportDelete/${airportCode}`, { responseType: 'text' });
}

viewAllAirport(): Observable<any> {
  return this.http.get(`${this.baseUrl}airport`);
}


}
