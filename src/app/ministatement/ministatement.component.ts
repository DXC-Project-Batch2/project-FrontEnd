import { sanitizeIdentifier, Statement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { IpayService } from '../service/ipay.service';
import{Savingsaccount} from '../service/savingsaccount';
@Component({
  selector: 'app-ministatement',
  templateUrl: './ministatement.component.html',
  styleUrls: ['./ministatement.component.css']
})
export class MinistatementComponent implements OnInit {

  constructor(private service:IpayService) { }

  ngOnInit(): void {
    
    this.statement();

  }

statementList:Statement[]= [];

  statement(){


          this.service.statement().subscribe(Savingsaccount => this.statementList = Savingsaccount );

            console.log(this.statementList);
  }
}
