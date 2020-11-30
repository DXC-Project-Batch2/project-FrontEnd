import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username:String;
  password:String;
 
   constructor(private authService:AuthenticationService,private router:Router) { }
 
   ngOnInit(): void {
   }
   adminLogin(){
 
     this.authService.loginAdmin(this.username,this.password).subscribe(data=>{
       
       console.log("response received")
       this.gotoList();
     },
       error=>console.log("exception occured")
       
     )
   }
   gotoList(){
     this.router.navigate(['/admin']);
   }
 

}
