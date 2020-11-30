import { Component, OnInit } from '@angular/core';
import { FixedDeposit } from '../service/fixedDeposit';
import { IpayService } from '../service/ipay.service';

@Component({
  selector: 'app-fixeddeposit',
  templateUrl: './fixeddeposit.component.html',
  styleUrls: ['./fixeddeposit.component.css']
})
export class FixeddepositComponent implements OnInit {

     fixeddeposit:FixedDeposit;


  constructor(private ipayService:IpayService) { }


  ngOnInit(): void {
  }


  addAmount(fixeddeposit:FixedDeposit){


     this.ipayService.addAmount(fixeddeposit);



  }
}

