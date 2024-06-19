import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../shared/services/interfaces';
import { passwordMatchValidator } from '../shared/services/password-mismatch';

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
  confirmPassword: new FormControl('', [Validators.required])
},
{
  validators:passwordMatchValidator
}
)

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
  return this.email.invalid && this.email.dirty;
}

get confirmPassword(){
  return this.signupForm.controls['confirmPassword']
}

get invalidConfirmPassword(){
  return this.confirmPassword.invalid && this.confirmPassword.dirty
}

get phonenumber(){
  return this.signupForm.controls['phonenumber']
}

get invalidPhonenumber(){
  return this.phonenumber.invalid && this.phonenumber.dirty
}

get fullname(){
  return this.signupForm.controls['fullname']
}

get invalidFullname(){
  return this.fullname.invalid && this.fullname.dirty
}

get misMatchPassword(){
  return (
    this.signupForm.errors?.['passwordMismatch'] && this.confirmPassword.valid && this.password.valid
  )
}



createAccount(){
  // const user= {
  //   email: this.signupForm.value.email,
  //   password: this.signupForm.value.password
  // } as User;

  if (!this.signupForm.valid) return;
}
}
