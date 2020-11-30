import { Component, OnInit } from '@angular/core';
import { Passenger } from '../model/passenger.model';
import { PassengerService } from '../services/passenger.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {

  passengers: Observable<Passenger[]>;
  constructor(private passengerService: PassengerService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData()
  {
    this.passengers=this.passengerService.ListAllPassengers();
  }

 /* removePassenger(govt_id: number){
    this.passengerService.removePassenger(govt_id)
    .subscribe(
      data=>{
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }*/

  public menu()
  {
    this.router.navigate(['/admin']);
  }  

}
