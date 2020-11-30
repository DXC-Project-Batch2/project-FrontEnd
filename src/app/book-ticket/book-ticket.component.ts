import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airline } from '../model/AirLine.model';
import { BookTicket } from '../model/bookTicket.model';
import { BookTicketService } from '../services/book-ticket.service';
import { FlightServiceService } from '../services/flight-service.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  flight : Airline ={planeId : 0, source :'',destination : '',date : '',duration : '',starting_time : '',ending_time : '',prize : 0,avaliable_seats : 0,  sold_out : 0 } ;
  ticket : BookTicket ={ticketId : 0,from : '',to : '',date : '',noOfPassengers:0}
  id : number;
  
  message : any;
  constructor(private flightService : FlightServiceService,
    private ticketService : BookTicketService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    let response =  this.flightService.searchFlight(this.id);
    response.subscribe(data => {
      this.flight = data;
    })
    
  }


 
  
  
  public bookTicket(){
    this.ticket.date =  this.flight.date;
    this.ticket.from = this.flight.source;
    this.ticket.to = this.flight.destination;
    console.log(this.ticket)
    let response = this.ticketService.bookTicket(this.ticket);
    response.subscribe(data => {
      this.message = data;
    });
    // this.router.navigate(['/student-list']);
  }

}