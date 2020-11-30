import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Securityquestion } from '../securityquestion';
import { SecurityquestionService } from '../securityquestion.service';

@Component({
  selector: 'app-forgot1',
  templateUrl: './forgot1.component.html',
  styleUrls: ['./forgot1.component.css']
})
export class Forgot1Component implements OnInit {

  securityquestion : Securityquestion = {
    username:'',
    securityQuestion :'',
    answer : ''
  };
  
  message : any;
  constructor(private service : SecurityquestionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  public check(){
    console.log(this.securityquestion)

    
    if (this.securityquestion.username.endsWith("@dxc.com")) {

      this.service.getadmin(this.securityquestion.username).subscribe(data=>{

        if(data.username==this.securityquestion.username && data.securityQuestion == this.securityquestion.securityQuestion && data.answer == this.securityquestion.answer)
        {
          console.log("response received"+data.username)
          this.router.navigate(['/ResetPassword',this.securityquestion.username]);
        }
        else{
          alert("Incorrect Details!!!");
          this.router.navigate(['login']);
  
        }
 
      },
      error=>
      { 
        console.log("exception occured")
      })
    }
    else if(this.securityquestion.username.endsWith("@gmail.com") || this.securityquestion.username.endsWith("@yahoo.com"))
    {

      this.service.getuser(this.securityquestion.username).subscribe(data=>{

        if(data.username==this.securityquestion.username && data.securityQuestion == this.securityquestion.securityQuestion && data.answer == this.securityquestion.answer)
        {
          console.log("response received"+data.username)
          this.router.navigate(['/ResetPassword',this.securityquestion.username]);
        }
        else{
          alert("Incorrect Details!!!");
          this.router.navigate(['login']);
  
        }
 
      },
      error=>
      { 
        console.log("exception occured")
      })
    }
    
    
  }

}
