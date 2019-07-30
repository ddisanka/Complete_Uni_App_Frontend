import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/Model/Student';
import { Router } from '@angular/router';
import { StudentDataService } from '../DataService/StudentDataService';

@Component({
  selector: 'app-employee-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit 
{
  @Input() cleardata: boolean = false;
  @Output() nameEvent = new EventEmitter<string>();
  objtempstd: Student;
  @Input() objstd: Student = new Student();;
  @ViewChild('closeBtn',{static:true}) cb: ElementRef;

  constructor(private dataservice: StudentDataService, private route: Router) {}

  ngOnInit() {
  }

  ResetValues() {}

  Register(regForm: NgForm)
  {
    this.objtempstd = new Student();
    this.objtempstd.email = regForm.value.email;
    this.objtempstd.firstname = regForm.value.firstname;
    this.objtempstd.lastname = regForm.value.lastname;
    this.objtempstd.gender = regForm.value.gender;
    this.objtempstd.phone = regForm.value.phone;
    this.objtempstd.dob = regForm.value.dob;

    this.dataservice.AddStudent(this.objtempstd).subscribe(res => 
    {
      alert("Student Added successfully");
      this.TakeHome();
    })
  }

  TakeHome() 
  {
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    this.route.navigateByUrl('');
  }
}
