import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../services/flight.service';
import { Airline } from '../model/airline.model';
import { AirportService } from '../services/airport.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  airline: Airline = new Airline();

  cities : any;


  submitted = false;
  constructor(private AirportService : AirportService,private flightService: FlightService,
    private router: Router) { }

  ngOnInit() {
    this.getCities();
  }

  newAirline(): void{
    this.submitted = false;
    this.airline = new Airline();
  }

  private getCities(){
    
    let response = this.AirportService.viewAllAirport();
    response.subscribe(data => this.cities = data);

  }


  save(){
    this.flightService
    .createFlight(this.airline).subscribe(data =>{
      console.log(data)
      this.airline = new Airline();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/viewflights']);
  }

  public menu()
  {
    this.router.navigate(['/admin']);
  }  

}
