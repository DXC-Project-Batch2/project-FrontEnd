import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../services/flight.service';
import { Airline } from '../model/airline.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searchscheduleflight',
  templateUrl: './searchscheduleflight.component.html',
  styleUrls: ['./searchscheduleflight.component.css']
})
export class SearchscheduleflightComponent implements OnInit {

  airlines:Observable<Airline[]>;
  airline:Airline[];
  planeId:number;
  check:boolean;
  show:boolean=false;

  constructor(private service: FlightService, private router: Router,private route: ActivatedRoute) { }

 /* ngOnInit(): void {
    this.airline = new Airline();
  }

  searchScheduleFlight(planeId:number):any{
    this.show=true;
    console.log(planeId);
    this.service.getFlight(planeId).subscribe((airline:Airline)=>this.airline=airline);
}*/

/*ngOnInit() {
  this.airline = new Airline();

  this.planeId = this.route.snapshot.params['planeId'];

  this.service.getFlight(this.planeId)
    .subscribe(data => {
      console.log(data)
      this.airline = data;
    }, error => console.log(error));
}*/

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
