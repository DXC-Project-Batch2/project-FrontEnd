import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityquestionService {

  private url='http://localhost:8080';

  constructor(private http : HttpClient) { }

 
  getadmin(username : string) : Observable<any>
  {
    return this.http.get(`${this.url}/AdminSecurity/${username}`);
  }

  getuser(username : string) : Observable<any>
  {
    return this.http.get(`${this.url}/usersecurity/${username}`);
  }

}