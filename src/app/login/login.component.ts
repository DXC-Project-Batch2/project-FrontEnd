import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Login } from '../login';
import { FlightService } from '../services/flight.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 username:String = null;
 password:String=null;

  constructor(private authService:AuthenticationService,private flightService: FlightService,private router:Router) { }

  ngOnInit(): void {
  }
  checkLogin(){
    console.log("date working")
    this.flightService.deleteFlightbyDate().subscribe(data => {
  },
  error=>console.error(error));

    if(this.username!=null && this.password!=null)
    {
      if (this.username.endsWith("@dxc.com")) {
        this.authService.loginAdmin(this.username,this.password).subscribe(data=>{
         
          console.log("response received")
          this.gotoListAdmin();
        },
          error=>
          { 
            console.log("exception occured")
            alert("invalid username or password!!!")
            location.reload();
          } 
        )
    
      } else if(this.username.endsWith("@gmail.com")){
  
        this.authService.loginUser(this.username,this.password).subscribe(data=>{
        
          console.log("response received")
          this.gotoList();
        },
        error=>
        { 
          console.log("exception occured")
          alert("invalid username or password!!!")
          location.reload();
        } 
        )}  
    }
        else if(this.username==null && this.password==null){
          alert("username & password cant be blank!!!");
          this.router.navigate(['login']);
        }
        else if(this.password==null){
          alert("password cant be blank!!!");
          this.router.navigate(['login']);
        }   
  }
  gotoListAdmin(){
    this.router.navigate(['/admin',this.username]);
  }

  gotoList(){
    this.router.navigate(['/userhome',this.username]);
  }  
}
