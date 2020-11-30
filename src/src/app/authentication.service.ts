import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  

  constructor(private _http:HttpClient) { }

  loginUser(username,password):Observable<any>
{
   
   return this._http.post<any>("http://localhost:8080/login",{username,password}).pipe(

   map(
       userdata=>{
         sessionStorage.setItem('username',username);
         return userdata;
       }))
      
 
}

isUserLoggedIn() {
  let login = sessionStorage.getItem('username')
  console.log(!(login === null))
  return !(login === null)
}



loginAdmin(username,password):Observable<any>
{
 
   return this._http.post<any>("http://localhost:8080/adminLogin",{username,password}).pipe(

   map(
       userdata=>{
         sessionStorage.setItem('username',username);
         return userdata;
       }))
 
}
isAdminLoggedIn() {
  let login = sessionStorage.getItem('username')
  console.log(!(login === null))
  return !(login === null)
}

logOut() {
  sessionStorage.removeItem('username')
  
}


  
     
}
