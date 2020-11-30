import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  private url='http://localhost:8080/changepassword';

  constructor(private http : HttpClient) { }

  updatechangePassword(changepassword : object) : Observable<object>
  {
    return this.http.put(`${this.url}`,changepassword);
  }


}

