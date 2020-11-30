import { Component, OnInit } from '@angular/core';
import { IpayService } from '../service/ipay.service';
import { ServiceProvider } from '../service/serviceprovider';

@Component({
  selector: 'app-addserviceprovider',
  templateUrl: './addserviceprovider.component.html',
  styleUrls: ['./addserviceprovider.component.css']
})
export class AddserviceproviderComponent implements OnInit {
  serviceprovider:ServiceProvider;


  constructor(private ipayService:IpayService) { }


  ngOnInit(): void {
  }


  addProviders(serviceprovider:ServiceProvider){


     this.ipayService.addProviders(serviceprovider);



  }
}

