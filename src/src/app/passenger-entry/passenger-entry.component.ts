import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airline } from '../model/airline.model';
import { Passenger } from '../model/passenger.model';
import { BookTicket } from '../model/ticketBooking.model';
import { BookingService } from '../services/booking.service';
import { FlightService } from '../services/flight.service';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-passenger-entry',
  templateUrl: './passenger-entry.component.html',
  styleUrls: ['./passenger-entry.component.css']
})
export class PassengerEntryComponent implements OnInit {
  passenger1 : Passenger = {username:'',name:'',gender:'',age:0,govt_id:0,flight_id:0}
  passenger2 : Passenger = new Passenger();
  passenger3 : Passenger = new Passenger();
  passenger4 : Passenger = new Passenger();
  passenger5 : Passenger = new Passenger();
  flight:Airline = new Airline();
  showTicket : boolean = false;

  showEntryButton : boolean = true;
  username;
  message: any;
  isDataLoaded : boolean = false; p1: boolean = false;p2 : boolean = false;p3 : boolean = false;p4 : boolean = false;p5 : boolean = false;
  ticket : BookTicket ={username:'',flightId:0,ticketId : 0, source : '',destination: '',date : '',noOfPassengers:0};

  constructor( private route: ActivatedRoute,
    private router: Router,
   private passengerService : PassengerService,
   private ticketBookingService : BookingService,
   private FlightService : FlightService) { }

  ngOnInit(): void {
    this.ticket.username = this.route.snapshot.params['username'];
    this.ticket.flightId = this.route.snapshot.params['flightId'];
    this.ticket.source = this.route.snapshot.params['source'];
    this.ticket.destination = this.route.snapshot.params['destination'];
    this.ticket.date = this.route.snapshot.params['date'];
    this.ticket.noOfPassengers = this.route.snapshot.params['noOfPassengers'];
    let response =  this.FlightService.viewFlight(this.ticket.flightId);
    response.subscribe(data => {
      this.flight = data; });
  
    console.log(this.ticket);
   
    
  }

  public enterPassengerDetails(){
    if(this.ticket.noOfPassengers>=1 && this.ticket.noOfPassengers<=5){
      this.p1=!this.p1;
    }
    if(this.ticket.noOfPassengers>=2 && this.ticket.noOfPassengers<=5){
      this.p2=!this.p2;
    }
    if(this.ticket.noOfPassengers>=3 && this.ticket.noOfPassengers<=5){
      this.p3=!this.p3;
    }
    if(this.ticket.noOfPassengers>=4 && this.ticket.noOfPassengers<=5){
      this.p4=!this.p4;
    }
    if(this.ticket.noOfPassengers==5){
      this.p5=!this.p5;
    }
    this.isDataLoaded=!this.isDataLoaded;
    this.showEntryButton =!this.showEntryButton;
  }
  
  public bookTicket(){
    if(this.ticket.noOfPassengers>=1 && this.ticket.noOfPassengers<=5){
      this.passenger1.username = this.ticket.username;
      this.passenger1.flight_id = this.ticket.flightId;
      console.log("p1->"+this.passenger1)
      let response = this.passengerService.createPassenger(this.passenger1);
      response.subscribe(data => {
        this.message = data;
      });
    }
    if(this.ticket.noOfPassengers>=2 && this.ticket.noOfPassengers<=5){
      this.passenger2.username = this.ticket.username;
      this.passenger2.flight_id = this.ticket.flightId;
      console.log("p2->"+this.passenger2)
      let response = this.passengerService.createPassenger(this.passenger2);
      response.subscribe(data => {
        this.message = data;
      });
    }
    if(this.ticket.noOfPassengers>=3 && this.ticket.noOfPassengers<=5){
      this.passenger3.username = this.ticket.username;
      this.passenger3.flight_id = this.ticket.flightId;
      console.log("p3->"+this.passenger3)
      let response = this.passengerService.createPassenger(this.passenger3);
      response.subscribe(data => {
        this.message = data;
      });
    }
    if(this.ticket.noOfPassengers>=4 && this.ticket.noOfPassengers<=5){
      this.passenger4.username = this.ticket.username;
      this.passenger4.flight_id = this.ticket.flightId;
      console.log("p4->"+this.passenger4)
      let response = this.passengerService.createPassenger(this.passenger4);
      response.subscribe(data => {
        this.message = data;
      });
    }
    if(this.ticket.noOfPassengers==5){
      this.passenger5.username = this.ticket.username;
      this.passenger5.flight_id = this.ticket.flightId;
      console.log("p5->"+this.passenger5)
      let response = this.passengerService.createPassenger(this.passenger5);
      response.subscribe(data => {
        this.message = data;
      });
    }
    console.log(this.ticket);
   let response = this.ticketBookingService.createBooking(this.ticket);
    response.subscribe(data => {
      this.message = data;
    });
    this.isDataLoaded=!this.isDataLoaded;
    this.showTicket=!this.showTicket;
  }
}
