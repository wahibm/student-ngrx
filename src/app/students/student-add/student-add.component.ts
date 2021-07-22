import { Component, OnInit,inject } from '@angular/core';
import { Student } from '../student.model';
import { Store, State, select } from "@ngrx/store";
import * as studentActions from "../state/student.action"
import * as fromStudent from "../state/student.reducer"
import { MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  student:Student=this.restStudent();
  
  constructor(private store: Store<fromStudent.AppState>,public dialogRef: MatDialogRef<StudentAddComponent>) { }

  ngOnInit(): void {
   
  }

  addNew(){
    this.store.dispatch(new studentActions.CreateStudent(this.student));
       this.restStudent();  }
  close(){
    this.dialogRef.close();
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
