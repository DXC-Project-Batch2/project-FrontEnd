import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-cancelticket',
  templateUrl: './cancelticket.component.html',
  styleUrls: ['./cancelticket.component.css']
})
export class CancelticketComponent implements OnInit {

  ticketId;
  message : any;

  constructor(private service : BookingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  public cancelTicket(){
   
    let response = this.service.deleteBooking(this.ticketId);
  response.subscribe(data => this.message= data);
    console.log("ticket cancelled"+ this.ticketId);
    alert("Ticket cancelled!");
   this.router.navigate(['/user']);
  }
}
