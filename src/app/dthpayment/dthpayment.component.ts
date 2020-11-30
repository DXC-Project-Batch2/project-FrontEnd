import { Component, OnInit } from '@angular/core';
import { Dthpayment } from '../service/Dthpayment';
import { IpayService } from '../service/ipay.service';

@Component({
  selector: 'app-dthbill',
  templateUrl: './dthpayment.component.html',
  styleUrls: ['./dthpayment.component.css']
})
export class DthbillComponent implements OnInit {

  dthpayment:Dthpayment;


  constructor(private ipayService:IpayService) { }


  ngOnInit(): void {
  }


  addPayment(dthpayment:Dthpayment){


    this.ipayService.addPayment(dthpayment);
  }
}
