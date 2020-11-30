import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { Flight } from '../model/flight.component';

import { FlightService } from '../services/flight.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Airline } from '../model/airline.model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  username : any;
  flights:Observable<Airline[]>;
  constructor(private route: ActivatedRoute,
    private flightService: FlightService, private router: Router) { }

  ngOnInit(){
    this.username = this.route.snapshot.params['username'];
    console.log(this.username);
    this.reloadData();
  }
  reloadData()
  {
    this.flights=this.flightService.ListAllFlights();
  }


  public bookTicket(planeId){
    this.router.navigate(['bookticket',planeId,this.username])
    console.log(planeId)
  }
}
