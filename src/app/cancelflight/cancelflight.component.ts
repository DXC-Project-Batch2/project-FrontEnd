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
  sno:number;
  show:boolean=false;
  submitted: boolean;
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

  deleteFlight(planeId : number):any{

    console.log(this.planeId)
    this.flightService.getFlight(this.planeId)
    .subscribe(data => {
      console.log(data)
      if(data==false)
      {
        this.show=false;
        alert("Filght not found by planId: "+this.planeId);
        location.reload();
      }else{
    this.flightService.deleteFlightbyPlane_Id(planeId).subscribe(data => {
      alert("plan cancelled!");
      this.router.navigate(['/viewflights']);
  },
  error=>console.error(error));      
        }
    }, error => console.log(error));
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

public menu()
{
  this.router.navigate(['/admin']);
}  

}
