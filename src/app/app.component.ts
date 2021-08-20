import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /* We may also write html here
  template:`<h1>Hello Deepak</h1>
  <p>How are you ??</p>`, */
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sample-Project';

  constructor(private router: Router) {}

  //router.navigate
  iteloop() {
    this.router.navigate(['/ite-loop']);
  }
}
