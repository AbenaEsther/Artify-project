import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../shared/services/interfaces';
import { passwordMatchValidator } from '../shared/services/password-mismatch';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit {
  isSignUpMode= true;
  isLoginMode= false;
  signupForm = new FormGroup(
    {
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phonenumber: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    {
      validators: passwordMatchValidator,
    }
  );

  get password() {
    return this.signupForm.controls['password'];
  }

  get invalidPassword() {
    return this.password.invalid && this.password.dirty;
  }

  get email() {
    return this.signupForm.controls['email'];
  }

  get invalidEmail() {
    return this.email.invalid && this.email.dirty;
  }

  get confirmPassword() {
    return this.signupForm.controls['confirmPassword'];
  }

  get invalidConfirmPassword() {
    return this.confirmPassword.invalid && this.confirmPassword.dirty;
  }

  get phonenumber() {
    return this.signupForm.controls['phonenumber'];
  }

  get invalidPhonenumber() {
    return this.phonenumber.invalid && this.phonenumber.dirty;
  }

  get fullname() {
    return this.signupForm.controls['fullname'];
  }

  get invalidFullname() {
    return this.fullname.invalid && this.fullname.dirty;
  }

  get misMatchPassword() {
    return (
      this.signupForm.errors?.['passwordMismatch'] &&
      this.confirmPassword.valid &&
      this.password.valid
    );
  }

  createAccount() {
    if (!this.signupForm.valid) return;
  }

   toggleMode(){
    this.isSignUpMode = !this.isSignUpMode;
    this.isLoginMode = !this.isLoginMode;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let eyeicon = document.getElementById('eyeicon') as HTMLImageElement;
    let password = document.getElementById('password') as HTMLInputElement;

    if (password && eyeicon) {
      eyeicon.onclick = function () {
        console.log('eyeicon clicked');
        password.type = password.type === 'password' ? 'text' : 'password';
        eyeicon.src= password.type === 'password'? '/assets/images/eye-close.png' : '/assets/images/eye-open.png'
      };
    }
    else{
      console.error('password or eye icon not found')
    }
  }

  ngOnInit(): void {
    // let eyeicon = document.getElementById('eyeicon') as HTMLImageElement;
    // let password = document.getElementById('password')as HTMLInputElement;
   
    // eyeicon.onclick = function () {
    //   if (password.type == 'password') {
    //     console.log("eyeicon clicked");
    //     console.log(password.type);
    //     password.type = 'text';
    //     eyeicon.src = '/assets/images/eye-close.png';
    //     console.log("hello")
    //   } else {
    //     password.type = 'password';
    //     eyeicon.src = '/assets/images/eye-open.png';
    //   }
    // };
  }

}
