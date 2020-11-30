import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../services/flight.service';
import { Airline } from '../model/airline.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  airline: Airline;
  planeId:number;
  sno:number;
  show:boolean=false;
  submitted: boolean;
  message: any;

  constructor(private service: FlightService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.airline = new Airline();

    this.sno= this.route.snapshot.params['pid'];
    console.log(this.sno);
    this.service.viewFlightBySno(this.sno)
      .subscribe(data => {
        console.log(data)
        this.airline = data;
      }, error => console.log(error));
  }

  updateFlight(){
    this.airline.trip=0;
    this.airline.schedule_period=this.airline.sno;
      console.log(this.airline)
      let response = this.service.updateFlight(this.airline);
      response.subscribe(data => {
        this.message = data
        
      });
      this.router.navigate(['/viewflights']);
  }
}
