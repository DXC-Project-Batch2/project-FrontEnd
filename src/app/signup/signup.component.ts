import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

    myForm: FormGroup ;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]*')]) ,
      lastname:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]*')]),
      gender:new FormControl('',Validators.required),
      dob:new FormControl('',Validators.required),
      fathername:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]*')]),
      passportname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]*')]),
      doorNumber:new FormControl('',Validators.required),
      street:new FormControl('',Validators.required),
      area:new FormControl('',Validators.required),
      country:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]*')]),
      state:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]*')]),
      city:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]*')]),
      postalCode:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{6}$')]),  
      mobile:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
      passportnumber:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{8}$')]),
      expiry:new FormControl('',Validators.required),
      username:new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3}$")]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      securityQuestion:new FormControl('',Validators.required),
      answer:new FormControl('',Validators.required)
    })

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
