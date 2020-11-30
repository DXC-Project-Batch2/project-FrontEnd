import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Changepassword } from '../changepassword';
import { ChangepasswordService } from '../changepassword.service';

@Component({
  selector: 'app-forgot3',
  templateUrl: './forgot3.component.html',
  styleUrls: ['./forgot3.component.css']
})
export class Forgot3Component implements OnInit {

  changepassword : Changepassword = {
    username:'',
    password:''
  };
  
  message : any;
  constructor(private service : ChangepasswordService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

  }

  public save(){
    console.log(this.changepassword)
    let response = this.service.updatechangePassword(this.changepassword);
    response.subscribe(data => {
      this.message = data
      
    });
    this.router.navigate(['/login']);

  }

}
