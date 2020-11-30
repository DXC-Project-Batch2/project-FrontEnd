import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Airline } from '../model/airline.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-cancel-trip',
  templateUrl: './cancel-trip.component.html',
  styleUrls: ['./cancel-trip.component.css']
})
export class CancelTripComponent implements OnInit {

  airlines:Observable<Airline[]>;
  planeId:number;
  sno:number;
  show:boolean=false;
  submitted: boolean;
  message: any;

  constructor(private service: FlightService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
  
  }

  searchScheduleFlight(planeId:number):any{
    console.log(this.planeId);
    this.airlines = this.service. getFlight(this.planeId);
    
    this.service.getFlight(this.planeId)
    .subscribe(data => {
      console.log(data)
      if(data==false)
      {
        this.show=false;
        alert("Filght not found by planId: "+this.planeId);
        location.reload();
      }else{
       this.show=true;
       console.log(planeId);
       this.service.getFlight(this.planeId)
         .subscribe(data => {
           console.log(data)
           this.airlines = data;
         }, error => console.log(error));
        }
    }, error => console.log(error));
  
  }

  cancelTrip(sno : number){
    console.log(this.sno)
    this.service.deleteFlight(sno).subscribe(data => {
      alert("plan cancelled!");
      this.router.navigate(['/viewflights']);
  },
  error=>console.error(error));
  
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
