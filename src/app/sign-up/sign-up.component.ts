import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {

  ngOnInit(): void {
    const Form= document.querySelector("form");

    Form?.addEventListener("submit", (e)=>{
      e.preventDefault();
      const formData = new FormData(Form);
    })
  }
}
