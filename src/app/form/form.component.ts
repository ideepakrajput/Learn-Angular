import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //ngForm
  Register(regform: any) {
    var firstname = regform.controls.firstname.value;
    var lastname = regform.controls.lastname.value;
    var email = regform.controls.email.value;
    console.log(firstname);
    console.log(lastname);
    console.log(email);
  }
}
