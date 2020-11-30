import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Signup } from '../signup';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup : Signup = {
    username : '',
    password : '',
    securityQuestion : '',
    answer : '',
    name : '',
    lastname : '',
    gender : '',
  	dob : '',
	fathername : '',
	passportname : '',
	passportnumber : 0,
	expiry : '',
	doorNumber : '',
	street : '',
	area : '',
	country : '',
	state : '',
	city : '',
	postalCode : 0,
	landMark : '',
	mobile : '',

  };

  message : any;

  constructor( private signupService :SignupService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  public save(){
    console.log(this.signup)
    let response = this.signupService.addSignUp(this.signup);
    response.subscribe(data => {
      this.message = data;
    });
    this.router.navigate(['/login']);
  }

}
