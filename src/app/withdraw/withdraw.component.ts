import { Component, OnInit } from '@angular/core';
import { IpayService } from '../service/ipay.service';
import { Withdraw } from '../service/Withdraw';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  withdraw:Withdraw;


  constructor(private ipayService:IpayService) { }


  ngOnInit(): void {
  }


  debitMoney(withdraw:Withdraw){


     this.ipayService.debitMoney(withdraw);



  }
}
