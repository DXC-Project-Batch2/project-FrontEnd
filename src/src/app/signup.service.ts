import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private url='http://localhost:9090/Registration';

  constructor(private http : HttpClient) { }

 
  getSignUp(username : string) : Observable<any>
  {
    return this.http.get(`${this.url}/${username}`);
  }

  addSignUp(signup : object) : Observable<object>
  {
    return this.http.post(`${this.url}`,signup);
  }

  updateSignUp(signup : object) : Observable<object>
  {
    return this.http.put(`${this.url}`,signup);
  }

  deleteSignUp(username : string) : Observable<any>
  {
    return this.http.delete(`${this.url}/${username}`);
  }

}
