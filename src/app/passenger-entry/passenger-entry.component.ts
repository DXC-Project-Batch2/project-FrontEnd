import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  passenger1 : Passenger = {ticketId:0,username:'',name:'',gender:'',age:0,govt_id:0,flight_id:0};
  passenger2 : Passenger = {ticketId:0,username:'',name:'',gender:'',age:0,govt_id:0,flight_id:0};
  passenger3 : Passenger = {ticketId:0,username:'',name:'',gender:'',age:0,govt_id:0,flight_id:0};
  passenger4 : Passenger = {ticketId:0,username:'',name:'',gender:'',age:0,govt_id:0,flight_id:0};
  passenger5 : Passenger = {ticketId:0,username:'',name:'',gender:'',age:0,govt_id:0,flight_id:0};
  flight:Airline = {    sno : 0,planeId : 0 ,carrierName : 0,source :''  ,	destination : '' ,date : '' ,schedule_period : 0,trip : 0,duration : '' ,starting_time : '' ,ending_time : '' ,prize : 0 ,avaliable_seats : 0 ,sold_out : 0 };
  showTicket : boolean = false;
  ticketId :number;

  showEntryButton : boolean = true;
  username;
  message: any;
  isDataLoaded : boolean = false; p1: boolean = false;p2 : boolean = false;p3 : boolean = false;p4 : boolean = false;p5 : boolean = false;n1 : boolean = false;n2 : boolean = false;n3 : boolean = false;n4 : boolean = false;n5 : boolean = false
  ticket : BookTicket ={username:'',flightId:0,ticketId : 0, source : '',destination: '',date : '',noOfPassengers:0};

  constructor( private route: ActivatedRoute,
    private router: Router,
   private passengerService : PassengerService,
   private ticketBookingService : BookingService,
   private FlightService : FlightService) { }

   myForm: FormGroup ;

  ngOnInit(): void {
    

    this.myForm = new FormGroup({
      name1:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]*')]),
      name2:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]*')]),
      name3:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]*')]),
      name4:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]*')]),
      name5:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]*')]),

      govt_id1: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{12}$')]),
      govt_id2: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{12}$')]),
      govt_id3: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{12}$')]),
      govt_id4: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{12}$')]),
      govt_id5: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{12}$')]),

    
      gender1:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(6),Validators.pattern('^[a-zA-Z]*')]),
      gender2:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(6),Validators.pattern('^[a-zA-Z]*')]),
      gender3:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(6),Validators.pattern('^[a-zA-Z]*')]),
      gender4:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(6),Validators.pattern('^[a-zA-Z]*')]),
      gender5:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(6),Validators.pattern('^[a-zA-Z]*')]),

      age1: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{2}$'),Validators.min(1),Validators.max(100)]),
      age2: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{2}$'),Validators.min(1),Validators.max(100)]),
      age3: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{2}$'),Validators.min(1),Validators.max(100)]),
      age4: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{2}$'),Validators.min(1),Validators.max(100)]),
      age5: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{2}$'),Validators.min(1),Validators.max(100)])

    })


    this.flight.sno=this.route.snapshot.params['sno'];
    this.flight.planeId=this.route.snapshot.params['flightId'];
    this.flight.carrierName=this.route.snapshot.params['carrierName'];
    this.flight.source=this.route.snapshot.params['source'];
    this.flight.destination=this.route.snapshot.params['destination'];
    this.flight.date=this.route.snapshot.params['date'];
    this.flight.duration=this.route.snapshot.params['duration'];
    this.flight.starting_time=this.route.snapshot.params['starting_time'];
    this.flight.ending_time=this.route.snapshot.params['ending_time'];
    this.flight.prize=this.route.snapshot.params['prize'];
    this.flight.avaliable_seats=this.route.snapshot.params['avaliable_seats'];
    this.flight.sold_out=this.route.snapshot.params['sold_out'];

    this.ticket.username = this.route.snapshot.params['username'];
    this.ticket.flightId = this.route.snapshot.params['flightId'];
    this.ticket.source = this.route.snapshot.params['source'];
    this.ticket.destination = this.route.snapshot.params['destination'];
    this.ticket.date = this.route.snapshot.params['date'];
    this.ticket.noOfPassengers = this.route.snapshot.params['noOfPassengers'];
    
    let response = this.ticketBookingService.getTicketId();
    response.subscribe(data => {
      this.ticketId = data;
      console.log(this.ticketId+1);
    });
  
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
    if(this.ticket.noOfPassengers==1){
      this.n1=!this.n1;
    }
    if(this.ticket.noOfPassengers==2){
      this.n2=!this.n2;
    }
    if(this.ticket.noOfPassengers==3){
      this.n3=!this.n3;
    }
    if(this.ticket.noOfPassengers==4){
      this.n4=!this.n4;
    }
    if(this.ticket.noOfPassengers==5){
      this.n5=!this.n5;
    }
    this.isDataLoaded=!this.isDataLoaded;
    this.showEntryButton =!this.showEntryButton;
  }
  

  public bookTicket(){
    console.log(this.ticket);
    let response = this.ticketBookingService.createBooking(this.ticket);
    response.subscribe(data => {
      this.message = data;
    });
    this.addPassenger();
  }
  public addPassenger(){
    
    if(this.ticket.noOfPassengers>=1 && this.ticket.noOfPassengers<=5){
      this.passenger1.ticketId = this.ticketId+1;
      console.log(this.passenger1.ticketId);
      this.passenger1.username = this.ticket.username;
      this.passenger1.flight_id = this.ticket.flightId;
      console.log("p1->"+this.passenger1)
      let response = this.passengerService.createPassenger(this.passenger1);
      response.subscribe(data => {
        this.message = data;
      });
    }
    if(this.ticket.noOfPassengers>=2 && this.ticket.noOfPassengers<=5){
      this.passenger2.ticketId = this.ticketId+1;
      this.passenger2.username = this.ticket.username;
      this.passenger2.flight_id = this.ticket.flightId;
      console.log("p2->"+this.passenger2)
      let response = this.passengerService.createPassenger(this.passenger2);
      response.subscribe(data => {
        this.message = data;
      });
    }
    if(this.ticket.noOfPassengers>=3 && this.ticket.noOfPassengers<=5){
      this.passenger3.ticketId = this.ticketId+1;
      this.passenger3.username = this.ticket.username;
      this.passenger3.flight_id = this.ticket.flightId;
      console.log("p3->"+this.passenger3)
      let response = this.passengerService.createPassenger(this.passenger3);
      response.subscribe(data => {
        this.message = data;
      });
    }
    if(this.ticket.noOfPassengers>=4 && this.ticket.noOfPassengers<=5){
      this.passenger4.ticketId = this.ticketId+1;
      this.passenger4.username = this.ticket.username;
      this.passenger4.flight_id = this.ticket.flightId;
      console.log("p4->"+this.passenger4)
      let response = this.passengerService.createPassenger(this.passenger4);
      response.subscribe(data => {
        this.message = data;
      });
    }
    if(this.ticket.noOfPassengers==5){
      this.passenger5.ticketId = this.ticketId+1;;
      this.passenger5.username = this.ticket.username;
      this.passenger5.flight_id = this.ticket.flightId;
      console.log("p5->"+this.passenger5)
      let response = this.passengerService.createPassenger(this.passenger5);
      response.subscribe(data => {
        this.message = data;
      });
    }

    if(this.flight!=null)
    {
      this.flight.avaliable_seats=this.flight.avaliable_seats-this.ticket.noOfPassengers;
      this.flight.sold_out=Number(this.flight.sold_out)+Number(this.ticket.noOfPassengers);   
      let response =  this.FlightService.updateFlight(this.flight);
      response.subscribe(data => {
        this.message = data; });
    
        console.log(this.flight);  
      
    }
   
    this.isDataLoaded=!this.isDataLoaded;
    this.showTicket=!this.showTicket;
  }


  public menu()
  {
    this.router.navigate(['/user',this.ticket.username]);
  }

  public print(){

    alert("Ticket.pdf saved in path c:\\Download");
    let response = this.ticketBookingService.getTicketPDF();
    response.subscribe(data => {
      this.message = data;
    

    });
    this.router.navigate(['/user',this.ticket.username]);

  }
}
