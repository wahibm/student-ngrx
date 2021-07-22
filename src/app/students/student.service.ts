import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Student } from "./student.model";

@Injectable({
  providedIn: "root"
})
export class StudentService {
    private studentsUrl = "http://localhost:3000/students";
  
    constructor(private http: HttpClient) {}
  
    getStudent(): Observable<Student[]> {
      return this.http.get<Student[]>(this.studentsUrl);
    }
  
    getStudentById(payload: number): Observable<Student> {
      return this.http.get<Student>(`${this.studentsUrl}/${payload}`);
    }
  
    createStudent(payload: Student): Observable<Student> {
      return this.http.post<Student>(this.studentsUrl, payload);
    }
  
    updateStudent(student: Student): Observable<Student> {
      return this.http.patch<Student>(
        `${this.studentsUrl}/${student.id}`,
        student
      );
    }
  
    deleteStudent(payload: number) {
      return this.http.delete(`${this.studentsUrl}/${payload}`);
    }
  }
