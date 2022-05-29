import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {
  registerForm: any;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "firstname": new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("[A-Za-z]{1,32}")]),
      "lastname": new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("[A-Za-z]{1,32}")]),
      "email": new FormControl('', [Validators.required]),
      "password": new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$"')]),
      "confirmpassword": new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$"')]),
      "phonenumber": new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern("[6-9]\\d{9}")]),
    });
  }
  get firstname() {
    return this.registerForm.get("firstname");
  }

  get lastname() {
    return this.registerForm.get("lastname");
  }

  get email() {
    return this.registerForm.get("email");
  }

  get password() {
    return this.registerForm.get("password");
  }

  get confirmpassword() {
    return this.registerForm.get("confirmpassword");
  }
  get phonenumber() {
    return this.registerForm.get("phonenumber");
  }


  submit() {
    console.log(this.registerForm.value);

    localStorage.setItem("firstname", this.registerForm.value.firstname);
    localStorage.setItem("lastname", this.registerForm.value.lastname);
    localStorage.setItem("email", this.registerForm.value.email);
    localStorage.setItem("password",this.registerForm.value.password);
    localStorage.setItem("confirmpassword",this.registerForm.value.confirmpassword);
    localStorage.setItem("phonenumber", this.registerForm.value.phonenumber);
  }

}
