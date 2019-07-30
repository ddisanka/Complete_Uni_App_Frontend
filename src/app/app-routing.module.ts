import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularCRUDComponent } from './angular-crud/angular-crud.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

import { StudentAddComponent } from './student-add/student-add.component';

const routes: Routes = [{path:'',component:AngularCRUDComponent},
{path:'Edit',component:StudentUpdateComponent},
{path:'Add',component:StudentAddComponent},
{path:'Home',component:AngularCRUDComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
