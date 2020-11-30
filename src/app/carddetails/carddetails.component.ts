import { Component, OnInit } from '@angular/core';
import { CardDetails } from '../service/CardDetails';
import { IpayService } from '../service/ipay.service';

@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.css']
})
export class CarddetailsComponent implements OnInit {
  
  carddetails:CardDetails;


  constructor(private ipayService:IpayService) { }


  ngOnInit(): void {
  }


  addCardDetails(carddetails:CardDetails){


    this.ipayService.addCardDetails(carddetails);



  }
}