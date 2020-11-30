import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../services/flight.service';
import { Airline } from '../model/airline.model';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  airline: Airline = new Airline();
  submitted = false;
  constructor(private flightService: FlightService,
    private router: Router) { }

  ngOnInit() {
  }

  newAirline(): void{
    this.submitted = false;
    this.airline = new Airline();
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

}
