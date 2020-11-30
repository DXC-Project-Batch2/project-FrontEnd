import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityquestionService {

  private url='http://localhost:9090/Security';

  constructor(private http : HttpClient) { }

 
  getadmin(username : string) : Observable<any>
  {
    return this.http.get(`${this.url}/${username}`);
  }

  getuser(username : string) : Observable<any>
  {
    return this.http.get(`${this.url}/${username}`);
  }

}