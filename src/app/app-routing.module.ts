import { FormArrayComponent } from './form-array/form-array.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormComponent } from './form/form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IteLoopComponent } from './ite-loop/ite-loop.component';
import { PipeComponent } from './pipe/pipe.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //its is used for default ite-loop component
    path: '',
    redirectTo: 'ite-loop',
    pathMatch: 'full',
  },
  {
    path: 'ite-loop',
    component: IteLoopComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'pipe',
    component: PipeComponent,
  },
  //ngForm
  {
    path: 'form',
    component: FormComponent,
  },
  //Reactive form
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  //FormArray
  {
    path: 'form-array',
    component: FormArrayComponent,
  },
  //wildcard routes (for non match links)
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
