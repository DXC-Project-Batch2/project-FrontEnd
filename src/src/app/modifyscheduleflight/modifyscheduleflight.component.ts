import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../services/flight.service';
import { Airline } from '../model/airline.model';

@Component({
  selector: 'app-modifyscheduleflight',
  templateUrl: './modifyscheduleflight.component.html',
  styleUrls: ['./modifyscheduleflight.component.css']
})
export class ModifyscheduleflightComponent implements OnInit {

  airline:Airline;
  planeId:number;
  show:boolean=false;
  submitted: boolean;
  message: any;

  constructor(private service: FlightService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.airline = new Airline();
  }
  searchScheduleFlight(planeId:number):any{
  
    this.show=true;
    console.log(planeId);
    this.service.getFlight(this.planeId)
      .subscribe(data => {
        console.log(data)
        this.airline = data;
      }, error => console.log(error));
  }
  
  /*modifyFlight(){
    this.submitted = false;
    this.service.updateFlight(this.airline)
      .subscribe(data => {
        console.log(data);
        this.airline = new Airline();
        this.gotoList();
      }, error => console.log(error));
  }
  onSubmit(){
    this.submitted = true;
    this.modifyFlight();
  }
  
  gotoList(){
    this.router.navigate(['/viewflights']);
  }*/
  modifyFlight(){
    console.log(this.airline)
    let response = this.service.updateFlight(this.airline);
    response.subscribe(data => {
      this.message = data
      
    });
    this.router.navigate(['/viewflights']);

  }

  idValid:boolean=false;
validateId(){
    if(this.planeId>0){
        this.idValid=true;
    }
    else if(this.planeId<=100){
        this.idValid=true;
    }else{
        this.idValid=false;
    }

}
}
