import { Component, OnInit } from '@angular/core';
import { Airline } from '../model/AirLine.model';
import { FlightServiceService } from '../services/flight-service.service';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  flight : Airline ={
    planeId : 0, 
    source :'',
    destination : '',
    date : '',
    duration : '',
    starting_time : '',
    ending_time : '',
    prize : 0,
    avaliable_seats : 0,  
    sold_out : 0
  } ;
flightId: number =0;
showFlightTable : boolean = false;
  constructor(private service: FlightServiceService) { }

  ngOnInit(): void {
  }

  public searchFlight(){
    this.showFlightTable = !this.showFlightTable;
    let response = this.service.searchFlight(this.flightId);
    response.subscribe(data => this.flight = data);
    
  }
}
