import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Airline } from '../model/AirLine.model';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  API_URL = "http://localhost:9090/";

  constructor(private http : HttpClient) {  }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

public searchFlight(id){
  return this.http.get<Airline>(this.API_URL+"airline/"+id);

}

public listFlights(){
  return this.http.get<Airline[]>(this.API_URL+"airline");
}
}