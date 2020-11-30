import { Component, OnInit } from '@angular/core';
import { AccountDetails } from '../service/Accountdetails';
import { IpayService } from '../service/ipay.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {

  accountdetails:AccountDetails;


  constructor(private ipayService:IpayService) { }


  ngOnInit(): void {
  }


  addDetails(accountdetails:AccountDetails){


     this.ipayService.addDetails(accountdetails);



  }
}

