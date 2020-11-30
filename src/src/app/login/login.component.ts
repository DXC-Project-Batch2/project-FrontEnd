import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Login } from '../login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 username:String;
 password:String;

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
  checkLogin(){
    if (this.username.endsWith("@dxc.com")) {
      this.authService.loginAdmin(this.username,this.password).subscribe(data=>{
       
        console.log("response received")
        this.gotoListAdmin();
      },
        error=>console.log("exception occured")
        
      )
  
    } else if(this.username.endsWith("@gmail.com")){

      this.authService.loginUser(this.username,this.password).subscribe(data=>{
      
        console.log("response received")
        this.gotoList();
      },
        error=>console.log("exception occured")
        )}   
   
  }
  gotoListAdmin(){
    this.router.navigate(['/admin',this.username]);
  }

  gotoList(){
    this.router.navigate(['/userhome',this.username]);
  }

  
}
