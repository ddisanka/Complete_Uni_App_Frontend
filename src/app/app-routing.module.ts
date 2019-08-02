import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularCRUDComponent } from './angular-crud/angular-crud.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

import { StudentAddComponent } from './student-add/student-add.component';
import { CourseCrudComponent } from './course-crud/course-crud.component';

const routes: Routes = 
[
  {path:'student',component:AngularCRUDComponent},
  {path:'course',component:CourseCrudComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
