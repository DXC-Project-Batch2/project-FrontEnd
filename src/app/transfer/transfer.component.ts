import { Component, OnInit } from '@angular/core';
import { IpayService } from '../service/ipay.service';
import { Transfer } from '../service/transfer';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transfer:Transfer;


  constructor(private ipayService:IpayService) { }


  ngOnInit(): void {
  }


  addTransfer(transfer:Transfer){


     this.ipayService.addTransfer(transfer);



  }
}
