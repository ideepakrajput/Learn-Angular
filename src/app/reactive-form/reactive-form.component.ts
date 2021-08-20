import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
//Import for total form status changed
import { reactiveForm } from './reactive-form';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  signupform: FormGroup;
  firstname: string = '';
  lastname: string = '';
  emailid: string = '';
  password: string = '';

  constructor(formbuilder: FormBuilder) {
    this.signupform = formbuilder.group({
      // fname: new FormControl(),
      fname: ['', Validators.required],

      // lname: new FormControl(),
      lname: ['', Validators.required],

      // email: new FormControl(),
      email: ['', Validators.required],

      // pass: new FormControl(),
      pass: ['', Validators.required],
    });
  }

  //This is use for get value by form control
  /* 
    PostData(signupform: any) {
    this.firstname = signupform.controls.fname.value;
    this.lastname = signupform.controls.lname.value;
    this.emailid = signupform.controls.email.value;
    this.password = signupform.controls.pass.value;

    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.emailid);
    console.log(this.password);

    // console.log(signupform.controls);
  } 
  */

  //Submit -- get value by get method
  Submit() {
    this.firstname = this.signupform.get('fname')?.value;
    this.lastname = this.signupform.get('lname')?.value;
    this.emailid = this.signupform.get('email')?.value;
    this.password = this.signupform.get('pass')?.value;
    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.emailid);
    console.log(this.password);
  }

  //Reset -- reset all the values blank
  Reset() {
    this.signupform.reset();
  }

  //Fill Data --  use of stvalue and patch value
  /* if you use the setvalue then all the data must set */
  FillData() {
    this.signupform.setValue({
      fname: 'Deepak',
      lname: 'Kumar',
      email: 'deepakkumar18112001@gmail.com',
      pass: '123456',
    });
  }

  /* if you use the patchvalue then any no of data will set */
  FillData1() {
    this.signupform.patchValue({
      lname: 'Kumar',
      email: '@gmail.com',
    });
  }
  ngOnInit(): void {
    //Value change on one form control
    /* this.signupform.get('fname')?.valueChanges.subscribe((username) => {
      console.log('fname Changed :' + username);
    }); */
    //Total Form
    /* Here we create a class reactiveForm for all the formcontrol */
    this.signupform.valueChanges.subscribe((formchanges: reactiveForm) => {
      console.log('fname Changed :' + formchanges.fname);
      console.log('lname Changed :' + formchanges.lname);
      console.log('email Changed :' + formchanges.email);
      console.log('pass Changed :' + formchanges.pass);
    });
    //Status Change for name
    /* this.signupform.get('fname')?.statusChanges.subscribe((username) => {
      console.log('fname status Changed :' + username);
    }); */
    //Status change for group
    /* this.signupform.statusChanges.subscribe((status) => {
      console.log('form Status Changed :' + status);
    }); */
    //FormArray
  }
}
