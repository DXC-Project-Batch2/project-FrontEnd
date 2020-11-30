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
    question :'',
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
       if(this.service.getadmin(this.securityquestion.username))
          {
            this.router.navigate(['/ResetPassword']);
         }            
    }
    else
    {

      if(this.service.getuser(this.securityquestion.username))
          {
            this.router.navigate(['/ResetPassword']);
         }            
    }
    
    
  }

}
