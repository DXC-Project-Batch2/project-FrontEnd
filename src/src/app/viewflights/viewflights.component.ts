import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { FlightService } from '../services/flight.service';
import { Airline } from '../model/airline.model';
@Component({
  selector: 'app-viewflights',
  templateUrl: './viewflights.component.html',
  styleUrls: ['./viewflights.component.css']
})
export class ViewflightsComponent implements OnInit {

  airlines: Observable<Airline[]>;
  constructor(private flightService: FlightService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.airlines = this.flightService. ListAllFlights();
  }

  

  

}
