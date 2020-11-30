import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Airline } from '../model/airline.model';
import { BookTicket } from '../model/ticketBooking.model';
import { BookingService } from '../services/booking.service';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
  flight:Airline = new Airline();
  id : number;
  showTicket : boolean = false;
  showBooking : boolean = true;
  username : any;
  ticket : BookTicket ={username:'',flightId:0,ticketId : 0, source : '',destination: '',date : '',noOfPassengers:0};
  
  message : any;
  constructor(private FlightService : FlightService,
    private BookTicketService : BookingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.username = this.route.snapshot.params['username'];
    console.log(this.username);
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    let response =  this.FlightService.viewFlight(this.id);
    response.subscribe(data => {
      this.flight = data;
      console.log(this.flight);
    })
    
  }

  public bookTicket(){
    
    this.showBooking =!this.showBooking;
    this.showTicket=!this.showTicket;
    this.ticket.date =  this.flight.date;
    this.ticket.source = this.flight.source;
    this.ticket.username = this.username;
    this.ticket.flightId = this.flight.planeId;
    this.ticket.destination = this.flight.destination;
    console.log(this.ticket)
    // let response = this.BookTicketService.createBooking(this.ticket);
    // response.subscribe(data => {
    //   this.message = data;
    // });

    // alert("Ticket Booked Successfully!");
   this.router.navigate(['/passengerEntry',this.ticket.flightId,this.ticket.username,this.ticket.source,this.ticket.destination,this.ticket.date,this.ticket.noOfPassengers,this.ticket.ticketId]);
  }
}
