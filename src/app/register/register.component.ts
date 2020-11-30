import { Component, OnInit } from '@angular/core';
import { IpayService } from '../service/ipay.service';
import { Register } from '../service/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 register:Register

  constructor(private ipayService:IpayService) { }


  ngOnInit(): void {
  }


  addCustomer(register:Register){


     this.ipayService.addCustomer(register);



  }
}

