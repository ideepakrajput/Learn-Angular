import { User } from './../reactive-form/reactive-form';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder,
  NgForm,
} from '@angular/forms';
import { reactiveForm } from '../reactive-form/reactive-form';
@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  register: any;
  newRow!: FormGroup;
  TotalRow!: number;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    //formArray
    const arr = new FormArray([new FormControl(), new FormControl()]);
    arr.patchValue(['Deepak']);
    arr.reset(['', '']);
    console.log(arr.value);
    console.log(arr.status);

    //Nested FormArray
    this.register = new FormGroup({
      ContactNos: new FormArray([
        new FormControl('9785668968'),
        new FormControl('9754564676'),
        new FormControl('7254880990'),
      ]),
    });

    //Addnew Rows
    this.newRow = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()]),
    });
  }

  //Nested formArray
  onSubmit() {
    console.log(this.register.get('ContactNos').value);
    console.log(this.register.value);
  }

  addContact() {
    this.register.get('ContactNos').push(new FormControl());
  }

  addPreset() {
    this.register.get('ContactNos').patchValue(['1234567890', '9876543210']);
  }

  //Add New Rows
  initItemRows() {
    return this._fb.group({
      Name: [''],
      Class: [''],
      RollNo: [''],
      MobileNo: [''],
    });
  }
  addNewRow() {
    const control = <FormArray>this.newRow.controls['itemRows'];
    control.push(this.initItemRows());
  }
  deleteRow(index: number) {
    const control = <FormArray>this.newRow.controls['itemRows'];
    if (control != null) {
      this.TotalRow = control.value.length;
    }
    if (this.TotalRow > 1) {
      control.removeAt(index);
      return true;
    } else {
      alert('One Row is mandatory');
      return false;
    }
  }

  //Checkbox and radio
  user = new User();
  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log('Username : ' + form.controls['uname'].value);
    console.log('Gender : ' + form.controls['gender'].value);
    console.log('Married : ' + form.controls['ismarried'].value);
    console.log('T&C : ' + form.controls['tc'].value);
  }

  setDefaultValue() {
    this.user.username = 'Deepak';
  }
}
