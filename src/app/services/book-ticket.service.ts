import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookTicketService {

  API_URL = "http://localhost:9090/";

  constructor(private http : HttpClient) {  }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  public bookTicket(bookTicket){
    return this.http.post(this.API_URL+"TicketBooking",bookTicket,{responseType: "text" as "json"})
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    );
  }

}
