import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  //[ngStyle]
  people: any[] = [
    {
      name: 'Deepak',
      country: 'India',
    },
    {
      name: 'JAcie',
      country: 'UK',
    },
    {
      name: 'Mithu',
      country: 'India',
    },
    {
      name: 'Ankit',
      country: 'India',
    },
    {
      name: 'william',
      country: 'UK',
    },
    {
      name: 'kelie',
      country: 'UK',
    },
  ];
  getcolor(Country: any): any {
    switch (Country) {
      case 'India':
        return 'green';
      case 'UK':
        return 'red';
    }
  }
  constructor() {}

  ngOnInit(): void {}

  //ngClass
  users = ['Deepak', 'Ankit', 'Mithu'];

  // OneWay-Data Binding :Interpolation / Property Binding
  empfirstname: string = 'Deepak';
  emplastname: string = 'Rajput';
  a: number = 20;
  b: number = 30;

  // OneWay-Data Binding : Attribute Binding
  cols: number = 3;
  bdr: number = 1;
  wd: number = 400;
  ht: number = 100;

  //OneWay-Data Binding : Event Binding
  onclick() {
    console.log('Button Clicked');
  }

  //TwoWay-Data Binding : without ngModel
  data1: string = 'Deepak';

  //TwoWay-Data Binding : ngModel
  data2: string = 'Mithu';
}
