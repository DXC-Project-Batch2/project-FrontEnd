import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Airline } from '../model/airline.model';
import { AirportService } from '../services/airport.service';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-search-flight-by-user',
  templateUrl: './search-flight-by-user.component.html',
  styleUrls: ['./search-flight-by-user.component.css']
})
export class SearchFlightByUserComponent implements OnInit {
  username : any;

  showSearchCities : boolean = true;
  showFlightTable : boolean = false;
  cities : any;
  source : any;
  destination : any;
  flights:Observable<Airline[]>;

  constructor(private AirpotService : AirportService,
    private flightService: FlightService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    console.log(this.username);
    this.getCities();
  }

  private getCities(){
    
    let response = this.AirpotService.viewAllAirport();
    response.subscribe(data => this.cities = data);
    console.log(this.cities);

  }

  public menu()
  {
    this.router.navigate(['/user',this.username]);
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

  public menuback()
  {
    this.router.navigate(['/user',this.username]);
  }

}
