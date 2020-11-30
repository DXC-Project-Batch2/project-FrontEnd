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
    this.flight.sno = this.route.snapshot.params['id'];
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    let response =  this.FlightService.viewFlightBySno(this.id);
    response.subscribe(data => {
      this.flight = data;
      console.log(this.flight);
    })
    
  }

  public bookTicket(){
    
    this.showBooking =!this.showBooking;
    this.showTicket=!this.showTicket;
    this.ticket.username = this.username;
    this.flight.sno=this.id;
    this.ticket.flightId = this.flight.planeId;
    this.ticket.source = this.flight.source;
    this.ticket.destination = this.flight.destination;
    this.ticket.date =  this.flight.date;
    this.flight.schedule_period=0;
    
    this.ticket.noOfPassengers = this.flight.trip;
    
    console.log(this.ticket)
    console.log(this.flight)
    // let response = this.BookTicketService.createBooking(this.ticket);
    // response.subscribe(data => {
    //   this.message = data;
    // });

    // alert("Ticket Booked Successfully!");
    this.router.navigate(['/passengerEntry',this.ticket.username,this.flight.sno,this.ticket.flightId,this.flight.carrierName,this.ticket.source,this.ticket.destination,this.ticket.date,this.flight.schedule_period,this.ticket.noOfPassengers,this.flight.duration,this.flight.starting_time,this.flight.ending_time, this.flight.prize,this.flight.avaliable_seats,this.flight.sold_out,this.ticket.ticketId]);
    }

    public menu()
    {
      this.router.navigate(['/user',this.username]);
    }
  
}
