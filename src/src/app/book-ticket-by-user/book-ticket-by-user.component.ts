import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Airline } from '../model/airline.model';
import { AirportService } from '../services/airport.service';
import { CityService } from '../services/city.service';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-book-ticket-by-user',
  templateUrl: './book-ticket-by-user.component.html',
  styleUrls: ['./book-ticket-by-user.component.css']
})
export class BookTicketByUserComponent implements OnInit {

  showSearchCities : boolean = true;
  showFlightTable : boolean = false;
  cities : any;
  source : any;
  destination : any;
  date : any;
  flights:Observable<Airline[]>;
  flightsAvailable:Observable<Airline[]>;
  username : any;

  constructor(private AirportService : AirportService,
    private flightService: FlightService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    console.log(this.username);
    this.getCities();
    this.reloadData()
  }

  reloadData()
{
  this.flightsAvailable=this.flightService.ListAllFlights();
}

  private getCities(){
    
    let response = this.AirportService.viewAllAirport();
    response.subscribe(data => this.cities = data);

  }

  public searchFlight(){

      this.showSearchCities = !this.showSearchCities;
      this.showFlightTable = !this.showFlightTable;
      this.flights=this.flightService.viewFlightByUser(this.source,this.destination);
    console.log("hello anil")
  }

public bookTicket(planeId){
  this.router.navigate(['bookticket',planeId,this.username])
  console.log(planeId)
}
}