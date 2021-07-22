import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import { Store } from '@ngrx/store';

import * as studentActions from '../state/student.action';
import * as fromStudent from '../state/student.reducer'
import { Student } from '../student.model';
import { StudentAddComponent } from '../student-add/student-add.component';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'] 
})
export class StudentEditComponent implements OnInit {
  selectedStudentid:number=0;
  student:Student=this.restStudent();
  
  
  
  constructor( private activateRoute:ActivatedRoute ,private router:Router,
    private store: Store<fromStudent.AppState>,private snackbar:MatSnackBar ) { }
  ngOnInit(): void {
  this.activateRoute.params.subscribe(p=>{this.selectedStudentid=p.id});
  this.store.dispatch(new studentActions.LoadStudent(this.selectedStudentid));
   this.store.select(fromStudent.getCurrentStudent).subscribe(currentStudent=>{
       if(currentStudent)
       {
         
         this.student=Object.assign({},currentStudent);
       }
      }
  );
      
    }
    updateStudent(){    
      console.log(this.student);
      this.store.dispatch(new studentActions.UpdateStudent(this.student));
      this.snackbar.open("Student :"+this.student.firstName+" has been updated","Done");
    }
    close(){
      this.router.navigate([`student/list`]);
    }
    restStudent():Student{  
      return this.student={
     id:0,
     firstName:"",
     lastName:"",
     birthDate:new Date(),
     isActive:false
      }
    }

}
