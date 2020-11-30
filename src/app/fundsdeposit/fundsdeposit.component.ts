import { Component, OnInit } from '@angular/core';
import { fundsDeposit } from '../service/fundsDeposit'
import { IpayService } from '../service/ipay.service';


@Component({
  selector: 'app-fundsdeposit',
  templateUrl: './fundsdeposit.component.html',
  styleUrls: ['./fundsdeposit.component.css']
})
export class FundsdepositComponent implements OnInit {

  fundsdeposit: fundsDeposit

  constructor(private instapay:IpayService) { }

  ngOnInit(): void {
  }

  addDeposit(fundsdeposit:fundsDeposit){
    this.instapay.addDeposit(fundsdeposit);
 }
}
