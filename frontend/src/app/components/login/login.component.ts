import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hide:boolean = true;
  userName:string='';
  password:string='';

  clearFields():void{
    this.userName = '';
    this.password = '';
  }

  // inputs={
  //   userName: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required, Validators.min(3) ])
  // }
  // signin: FormGroup = new FormGroup({
  //   userName: new FormControl('', [Validators.required, Validators.min(3) ]),
  //   password: new FormControl('', [Validators.required, Validators.min(3) ])
  // });
  // get userName() { 
  //   return this.signin.get('userName'); 
  // }
  // get passwordInput() { 
  //   return this.signin.get('password'); 
  // }

}
