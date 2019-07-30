import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/Model/Student'
import { ROOT_URL } from 'src/Model/Config'
import { Observable } from 'rxjs';

@Injectable()
export class StudentDataService 
{
  students: Observable<Student[]>;
  newestudent: Student;

  constructor(private http: HttpClient) {}

  getStudent() 
  {
    return this.http.get<Student[]>(ROOT_URL + 'Student');
  }

  AddStudent(std: Student) 
  {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = 
    {
      Fname: std.firstname, Lname: std.lastname, Email: std.email, phone:std.phone, 
      gender: std.gender, dob:std.dob
    }
    console.log(ROOT_URL);
    return this.http.post<Student>(ROOT_URL + 'Student', body, { headers });
  }

  ///
  EditStudent(std: Student) 
  {
    console.log(std);
    const params = new HttpParams().set('ID', std.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Fname: std.firstname, Lname: std.lastname, Email: std.email, phone:std.phone, ID: std.id
      , gender: std.gender, dob:std.dob
    }
    return this.http.put<Student>(ROOT_URL + 'Student/' + std.id, body, { headers, params })
  }
  
  DeleteStudent(std: Student) 
  {
    const params = new HttpParams().set('ID', std.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Fname: std.firstname, Lname: std.lastname, Email: std.email, phone:std.phone,
       ID: std.id, dob:std.dob
    }
    return this.http.delete<Student>(ROOT_URL + 'Student/' + std.id)
  }
}




