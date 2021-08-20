import { NgModule } from '@angular/core'; //for ngModel
import { FormsModule } from '@angular/forms'; //for ngModel
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './company/company.module';
import { EmployeeComponent } from './employee/employee.component';
import { MyserviceService } from './myservice.service';
import { PipeComponent } from './pipe/pipe.component';
import { MypipePipe } from './pipe/mypipe.pipe';
import { IteLoopComponent } from './ite-loop/ite-loop.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormArrayComponent } from './form-array/form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    PipeComponent,
    MypipePipe,
    IteLoopComponent,
    PagenotfoundComponent,
    FormComponent,
    ReactiveFormComponent,
    FormArrayComponent,
  ], //component directives pipes
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,
    FormsModule,
    ReactiveFormsModule,
  ], //modules
  providers: [MyserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('This is app.module');
  }
}
