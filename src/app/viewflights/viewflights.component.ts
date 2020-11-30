import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { FlightService } from '../services/flight.service';
import { Airline } from '../model/airline.model';
@Component({
  selector: 'app-viewflights',
  templateUrl: './viewflights.component.html',
  styleUrls: ['./viewflights.component.css']
})
export class ViewflightsComponent implements OnInit {
  username;
  airlines: Observable<Airline[]>;
  constructor(private flightService: FlightService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.airlines = this.flightService. ListAllFlights();
  }
  public menu()
  {
    this.router.navigate(['/admin']);
  }  

}
