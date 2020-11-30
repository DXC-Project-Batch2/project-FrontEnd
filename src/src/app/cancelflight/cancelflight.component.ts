import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../services/flight.service';
import { Airline } from '../model/airline.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cancelflight',
  templateUrl: './cancelflight.component.html',
  styleUrls: ['./cancelflight.component.css']
})
export class CancelflightComponent implements OnInit {
  airlines: Observable<Airline[]>;
  planeId: number
  message: any;

  constructor(private flightService: FlightService,
    private router: Router) { }

  ngOnInit(): void {
   // this.reloadData();
  }
  /*reloadData(){
    this.airlines = this.flightService. ListAllFlights();
  }*/
  /*deleteFlight() {
    this.flightService.deleteFlight(this.planeId)
     .subscribe(
       data => {
         console.log(data);
         this.reloadData();
       },
       error => console.error(error));
  }*/

  deleteFlight(){
    console.log(this.planeId)
    let response = this.flightService.deleteFlight(this.planeId);
    response.subscribe(data => {
      this.message = data
      
    });
    this.router.navigate(['/viewflights']);

  }
}
