import { Component, OnInit } from '@angular/core';
import { IpayService } from '../service/ipay.service';
import {RecurringDeposit } from '../service/Recurringdeposit';

@Component({
  selector: 'app-recurringdeposit',
  templateUrl: './recurringdeposit.component.html',
  styleUrls: ['./recurringdeposit.component.css']
})
export class RecurringdepositComponent implements OnInit {

  recurringdeposit:RecurringDeposit;


  constructor(private ipayService:IpayService) { }


  ngOnInit(): void {
  }


  addMoney(recurringdeposit:RecurringDeposit){


     this.ipayService.addMoney(recurringdeposit);



  }
}
