import { Component, HostListener, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-ite-loop',
  templateUrl: './ite-loop.component.html',
  styleUrls: ['./ite-loop.component.css'],
})
export class IteLoopComponent implements OnInit {
  ngOnInit(): void {}
  //ng If
  isvalid: boolean = true;
  changevalue(valid: any) {
    this.isvalid = valid;
  }

  //ng Switch
  public choose = '';
  setvalue(drp: any) {
    this.choose = drp.target.value;
  }

  //ng For
  Students: any[] = [
    {
      name: 'Deepak Kumar',
    },
    {
      name: 'Ankit Kumar',
    },
    {
      name: 'Mithu Kumar',
    },
    {
      name: 'Bitu Kumar',
    },
    {
      name: 'Ayush Kumar',
    },
    {
      name: 'Neha Kumari',
    },
  ];

  //Track by *ngFor
  Student: any[];
  constructor() {
    this.Student = [
      {
        studentId: 1,
        name: 'Deepak',
        gender: 'Male',
        age: 20,
        course: 'B.Sc',
      },
      {
        studentId: 2,
        name: 'Mithu',
        gender: 'Male',
        age: 22,
        course: 'B.A.',
      },
      {
        studentId: 3,
        name: 'Bitu',
        gender: 'Male',
        age: 24,
        course: 'M.Sc',
      },
      {
        studentId: 4,
        name: 'Ankiit',
        gender: 'Male',
        age: 16,
        course: 'Matric',
      },
      {
        studentId: 5,
        name: 'Neha',
        gender: 'Female',
        age: 21,
        course: 'BCA',
      },
      {
        studentId: 6,
        name: 'Sanchita',
        gender: 'Female',
        age: 20,
        course: 'B.Sc',
      },
    ];
  }
  getmorestudent(): void {
    this.Student = [
      {
        studentId: 1,
        name: 'Deepak',
        gender: 'Male',
        age: 20,
        course: 'B.Sc',
      },
      {
        studentId: 2,
        name: 'Mithu',
        gender: 'Male',
        age: 22,
        course: 'B.A.',
      },
      {
        studentId: 3,
        name: 'Bitu',
        gender: 'Male',
        age: 24,
        course: 'M.Sc',
      },
      {
        studentId: 4,
        name: 'Ankiit',
        gender: 'Male',
        age: 16,
        course: 'Matric',
      },
      {
        studentId: 5,
        name: 'Neha',
        gender: 'Female',
        age: 21,
        course: 'BCA',
      },
      {
        studentId: 6,
        name: 'Sanchita',
        gender: 'Female',
        age: 20,
        course: 'B.Sc',
      },
      {
        studentId: 7,
        name: 'Ayush',
        gender: 'Male',
        age: 14,
        course: '8th',
      },
    ];
  }
  trackbyStudentId(index: number, student: any): string {
    return student.studentId;
  }

  //Grouping With ngFor
  countrydetails: any[] = [
    {
      country: 'India',

      people: [
        {
          name: 'Deepak',
        },
        {
          name: 'Mithu',
        },
        {
          name: 'Bitu',
        },
      ],
    },
    {
      country: 'UK',

      people: [
        {
          name: 'Jemie',
        },
        {
          name: 'Kalson',
        },
        {
          name: 'Kelie',
        },
      ],
    },
  ];

  //[ngStyle]
  //@inject
  /* constructor(@Inject(MyserviceService)myserviceService:any) {
    console.log(myserviceService);
    console.log("This is app.component");
  } */

  //Event Listener
  @HostListener('click', ['$event'])
  onhostclick(event: Event) {
    // alert("Clicked");
  }
}
