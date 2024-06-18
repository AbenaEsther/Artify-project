import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../shared/services/interfaces';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
signupForm= new FormGroup({
  fullname:new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required, Validators.email]),
  phonenumber: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  repeatPassword: new FormControl('', [Validators.required])
})

get password(){
  return this.signupForm.controls['password']
}

get invalidPassword(){
  return this.password.invalid && this.password.dirty;
}

get email(){
  return this.signupForm.controls['email']
}

get invalidEmail(){
  return this.email.invalid && this.password.dirty;
}

get repeatPassword(){
  return this.signupForm.controls['repeatPassword']
}

get invalidRepeatPassword(){
  return this.repeatPassword.invalid && this.repeatPassword.dirty
}

get phonenumber(){
  return this.signupForm.controls['phonenumber']
}

get invalidPhonenumber(){
  return this.phonenumber.invalid && this.phonenumber.dirty
}



createAccount(){
  // const user= {
  //   email: this.signupForm.value.email,
  //   password: this.signupForm.value.password
  // } as User;

  if (!this.signupForm.valid) return;
}
}
