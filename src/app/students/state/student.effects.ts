import { Injectable } from "@angular/core";

import {Actions,createEffect,ofType} from "@ngrx/effects"
import {Action} from "@ngrx/store"

import { Observable,of } from "rxjs";
import {map,mergeMap,catchError} from "rxjs/operators"

import {StudentService} from "../student.service";
import * as studentActions from "../state/student.action"
import { Student } from "../student.model";

@Injectable()
export class StudentEffect{
    constructor(private actions$:Actions,private studentService:StudentService ){ }
        
    loadStudents$:Observable<Action>=createEffect(()=>
    this.actions$.pipe(
        ofType<studentActions.LoadStudents>(
            studentActions.StudentActionTypes.LOAD_STUDENTS
        ),
        mergeMap((action: studentActions.LoadStudents) =>
          this.studentService.getStudent().pipe(
            map(
              (Students: Student[]) =>
                new studentActions.LoadStudentsSuccess(Students)
            ),
            catchError(err => of(new studentActions.LoadStudentsFailed(err)))
          )
        )
      ));
      
      loadStudent$:Observable<Action>=createEffect(()=>
      this.actions$.pipe(
          ofType<studentActions.LoadStudent>(
              studentActions.StudentActionTypes.LOAD_STUDENT
          ),
          mergeMap((action: studentActions.LoadStudent) =>
            this.studentService.getStudentById(action.payload).pipe(  
              map(
                (Student: Student) =>
                  new studentActions.LoadStudentSuccess(Student)
              ),
              catchError(err => of(new studentActions.LoadStudentFail(err)))
            )
          )
        ));

        createStudent$:Observable<Action>=createEffect(()=>
        this.actions$.pipe(
            ofType<studentActions.CreateStudent>(
                studentActions.StudentActionTypes.CREATE_STUDENT
            ),
            map((action:studentActions.CreateStudent)=>action.payload),
            mergeMap((student:Student) =>
              this.studentService.createStudent(student).pipe(  
                map(
                  (NewStudent: Student) =>
                    new studentActions.CreateStudentSuccess(NewStudent)
                ),
                catchError(err => of(new studentActions.CreateStudentFail(err)))
              )
            )
          ));

        updateStudent$:Observable<Action>=createEffect(()=>
          this.actions$.pipe(
              ofType<studentActions.UpdateStudent>(
                  studentActions.StudentActionTypes.UPDATE_STUDENT
              ),
              map((action:studentActions.UpdateStudent)=>action.payload),
              mergeMap((student:Student) =>
                this.studentService.updateStudent(student).pipe(  
                  map(
                    (updateStudent: Student) =>
                      new studentActions.UpdateStudentSuccess({
                        id:updateStudent.id,
                        changes:updateStudent 
                      })
                  ),
                  catchError(err => of(new studentActions.UpdateStudent(err)))
                )
              )
            ));

            
        deleteStudent$:Observable<Action>=createEffect(()=>
        this.actions$.pipe(
            ofType<studentActions.DeleteStudent>(
                studentActions.StudentActionTypes.DELETE_STUDENT
            ),
            map((action:studentActions.DeleteStudent)=>action.payload),
            mergeMap((id:number) =>
              this.studentService.deleteStudent(id).pipe(
                map(() =>
                    new studentActions.DeleteStudentSuccess(id)
                ),
                catchError(err => of(new studentActions.DeleteStudentFail(err)))
              )
            )
          ));
   
  
} 