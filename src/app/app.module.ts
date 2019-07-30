import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCRUDComponent } from './angular-crud/angular-crud.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {StudentDataService} from '../app/DataService/StudentDataService';

@NgModule({
  declarations: [
    AppComponent,
    AngularCRUDComponent,
    StudentAddComponent,
    StudentUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [StudentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
