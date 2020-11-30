import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Airport } from '../model/airport.component';
import { AirportService } from '../services/airport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addairport',
  templateUrl: './addairport.component.html',
  styleUrls: ['./addairport.component.css']
})
export class AddairportComponent implements OnInit {

  airport: Airport = new Airport();
  submitted = false;

  constructor(private airportService: AirportService,
    private router: Router) { }

  ngOnInit(): void {
  }
  newAirline(): void{
    this.submitted = false;
    this.airport = new Airport();
  }

  save(){
    this.airportService
    .addAirport(this.airport).subscribe(data =>{
      console.log(data)
      this.airport = new Airport();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/airportlist']);
  }

  public menu()
{
  this.router.navigate(['/admin']);
}  


}
