import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  //Pipe : Built-in Pipe
  employees: any[] = [
    {
      code: 'emp001',
      name: 'Deepak',
      salary: 85000,
      dob: '18/nov/2001',
    },
    {
      code: 'emp002',
      name: 'Ankit',
      salary: 85000,
      dob: '18/aug/2001',
    },
    {
      code: 'emp003',
      name: 'Ayush',
      salary: 85000,
      dob: '18/jan/2001',
    },
    {
      code: 'emp004',
      name: 'Bitu',
      salary: 85000,
      dob: '18/feb/2001',
    },
    {
      code: 'emp005',
      name: 'Mithu',
      salary: 85000,
      dob: '18/june/2001',
    },
  ];
  //Pipe : Parametrized Pipe / Chaining Pipe
  DOB = new Date(2001, 10, 18);
  salaryD: number = 20000;

  //Pipe : Pipes with String
  name: string = 'Deepak';
  position: string = 'Web Developer';
  work: string = 'Web Devlopment';

  //Pipe : Date / Percent / Decimal / Currency
  currentDate = new Date();
  mynumber: number = 0.1234;

  //Pipe : json Pipe
  public employee_j = [
    {
      id: 1,
      name: 'Deepak',
    },
    {
      id: 2,
      name: 'Bitu',
    },
    {
      id: 3,
      name: 'Mithu',
    },
    {
      id: 4,
      name: 'Ayush',
    },
    {
      id: 5,
      name: 'Ankit',
    },
  ];
  
  //Pipe : Custom Pipe
  Students: any = [
    {
      code: '001',
      name: 'Deepak',
      gender: 'male',
      salary: 20000,
    },
    {
      code: '002',
      name: 'Neha',
      gender: 'female',
      salary: 20000,
    },
    {
      code: '003',
      name: 'Ayush',
      gender: 'male',
      salary: 20000,
    },
    {
      code: '004',
      name: 'Sanchita',
      gender: 'female',
      salary: 20000,
    },
    {
      code: '005',
      name: 'Nisha',
      gender: 'female',
      salary: 20000,
    },
  ];
}
