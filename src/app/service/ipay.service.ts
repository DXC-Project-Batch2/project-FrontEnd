import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfer } from './transfer';
import { FixedDeposit } from './fixedDeposit';
import { RecurringDeposit } from './Recurringdeposit';
import { Savingsaccount } from './savingsaccount';
import { Observable } from 'rxjs';
import { Dthpayment } from './Dthpayment';
import { AccountDetails } from './Accountdetails';
import { CardDetails } from './CardDetails';
import { Register } from './Register';
import { Withdraw } from './Withdraw';
import { fundsDeposit } from './fundsDeposit';
import { ServiceProvider } from './serviceprovider';

@Injectable({
  providedIn: 'root'
})
export class IpayService {


    url:string = "http://localhost:9090/ipay" ;


  constructor(private http:HttpClient) { }

    
  addTransfer(transfer:Transfer){



        this.http.post<Transfer>(this.url+"/send",transfer)
        .subscribe(transfer => alert("Amount Transferred successfully ") );

    }
    addAmount(fixeddeposit:FixedDeposit){



      this.http.post<FixedDeposit>(this.url+"/fixed",fixeddeposit)
      .subscribe(fixeddeposit => alert("Amount is Deposited successfully ") );

  }

  addMoney(recurringdeposit:RecurringDeposit){



    this.http.post<RecurringDeposit>(this.url+"/reocurring",recurringdeposit)
    .subscribe(RecurringDeposit=> alert("Amount Deposited successfully ") );

  }

  statement():Observable<any>{

  return   this.http.get(this.url+"/getministatement");

  }

  addPayment(dthpayment:Dthpayment){

  this.http.post<Dthpayment>(this.url+"/addDTHpayment",dthpayment)
  .subscribe(dthpayment => alert("Dth payment done successfully") );

  }

  addDetails(accountdetails:AccountDetails){

    this.http.post<AccountDetails>(this.url+"/addAccount",accountdetails)
    .subscribe(accountdetails => alert("Account details added successfully") );
  
    }

    addCardDetails(carddetails:CardDetails){

      this.http.post<CardDetails>(this.url+"/addCardDetails",carddetails)
      .subscribe(carddetails => alert("Card details added successfully") );
    
      }

    addCustomer(register:Register){

        this.http.post<Register>(this.url+"/register",register)
        .subscribe(register => alert("Registered succesfully ") );
  
    }
    debitMoney(withdraw:Withdraw){



      this.http.post<Withdraw>(this.url+"/withdraw",withdraw)
      .subscribe(withdraw => alert("Amount Withdrawn successfully ") );

  }

  addDeposit(fundsdeposit:fundsDeposit){



    this.http.post<fundsDeposit>(this.url+"/fundsDeposit",fundsdeposit)
    .subscribe(fundsdeposit => alert("Funds had been added successfully ") );

}

addProviders(serviceprovider:ServiceProvider){



  this.http.post<ServiceProvider>(this.url+"/serviceProviders",serviceprovider)
  .subscribe(serviceprovider => alert("Service Provider Name added successfully ") );

}
  

}



