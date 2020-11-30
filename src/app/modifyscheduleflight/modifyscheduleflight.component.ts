import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../services/flight.service';
import { Airline } from '../model/airline.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modifyscheduleflight',
  templateUrl: './modifyscheduleflight.component.html',
  styleUrls: ['./modifyscheduleflight.component.css']
})
export class ModifyscheduleflightComponent implements OnInit {

  airlines:Observable<Airline[]>;
  planeId:number;
  sno:number;
  show:boolean=false;
  submitted: boolean;
  message: any;

  constructor(private service: FlightService, private router: Router,private route: ActivatedRoute) { }

  /*ngOnInit() {
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
  }*/
  
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

  
  /*modifyFlight(){
    console.log(this.airline)
    let response = this.service.updateFlight(this.airline);
    response.subscribe(data => {
      this.message = data
      
    });
    this.router.navigate(['/viewflights']);

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
  

  updateFlight(sno : number){
    console.log(sno);
    this.router.navigate(['/updateFlight',sno]);
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
