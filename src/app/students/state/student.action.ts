import {Action} from "@ngrx/store";
import { Student } from "../student.model";
import { Update } from "@ngrx/entity";

export enum StudentActionTypes{

// Load Students list
LOAD_STUDENTS="[Student] Load Students",
LOAD_STUDENTS_SUCCESS="[Student] Load Students Success",
LOAD_STUDENTS_FAILED="[Student] Load Students Failed",

//Load Student
LOAD_STUDENT="[Student] Load Student",
LOAD_STUDENT_SUCCESS="[Student] Load Student Success",
LOAD_STUDENT_FAILED="[Student] Load Student Failed",

//Create Student
CREATE_STUDENT="[Student] Create Student",
CREATE_STUDENT_SUCCESS="[Student] Create Student Success",
CREATE_STUDENT_FAILED="[Student] Create Student Failed",

//Update Student

UPDATE_STUDENT = "[Student] Update Student",
UPDATE_STUDENT_SUCCESS = "[Student] Update Student Success",
UPDATE_STUDENT_FAIL = "[Student] Update Student Fail",

//Delete Student

DELETE_STUDENT = "[Student] Delete Student",
DELETE_STUDENT_SUCCESS = "[Student] Delete Student Success",
DELETE_STUDENT_FAIL = "[Student] Delete Student Fail"


}
// load students action
export class LoadStudents implements Action{
    readonly type=StudentActionTypes.LOAD_STUDENTS
}
export class LoadStudentsSuccess implements Action{
    readonly type=StudentActionTypes.LOAD_STUDENTS_SUCCESS
    constructor(public payload:Student[]){
    }
}
export class LoadStudentsFailed implements Action{
    readonly type=StudentActionTypes.LOAD_STUDENTS_FAILED
    constructor(public payload:string){}
}
// load student action
export class LoadStudent implements Action {
    readonly type = StudentActionTypes.LOAD_STUDENT;
  
    constructor(public payload: number) {}
  }
  
  export class LoadStudentSuccess implements Action {
    readonly type = StudentActionTypes.LOAD_STUDENT_SUCCESS;
  
    constructor(public payload: Student) {}
  }
  
  export class LoadStudentFail implements Action {
    readonly type = StudentActionTypes.LOAD_STUDENT_FAILED;
  
    constructor(public payload: string) {}
  }

  // Create student action

  export class CreateStudent implements Action {
    readonly type = StudentActionTypes.CREATE_STUDENT;
  
    constructor(public payload: Student) {}
  }
  
  export class CreateStudentSuccess implements Action {
    readonly type = StudentActionTypes.CREATE_STUDENT_SUCCESS;
  
    constructor(public payload: Student) {}
  }
  
  export class CreateStudentFail implements Action {
    readonly type = StudentActionTypes.CREATE_STUDENT_FAILED;
  
    constructor(public payload: string) {}
  }
// update student Action


export class UpdateStudent implements Action {
    readonly type = StudentActionTypes.UPDATE_STUDENT;
  
    constructor(public payload: Student) {}
  }
  
  export class UpdateStudentSuccess implements Action {
    readonly type = StudentActionTypes.UPDATE_STUDENT_SUCCESS;
  
    constructor(public payload: Update<Student>) {}
  }
  
  export class UpdateStudentFail implements Action {
    readonly type = StudentActionTypes.UPDATE_STUDENT_FAIL;
  
    constructor(public payload: string) {}
  }
  // delete stident action
  export class DeleteStudent implements Action {
    readonly type = StudentActionTypes.DELETE_STUDENT;
  
    constructor(public payload: number) {}
  }
  
  export class DeleteStudentSuccess implements Action {
    readonly type = StudentActionTypes.DELETE_STUDENT_SUCCESS;
  
    constructor(public payload: number) {}
  }
  
  export class DeleteStudentFail implements Action {
    readonly type = StudentActionTypes.DELETE_STUDENT_FAIL;
  
    constructor(public payload: string) {}
  }


export type Actions =
LoadStudents
|LoadStudentsSuccess
|LoadStudentsFailed
|LoadStudent
|LoadStudentSuccess
|LoadStudentFail
|CreateStudent
|CreateStudentSuccess
|CreateStudentFail
|UpdateStudent
|UpdateStudentSuccess
|UpdateStudentFail
|DeleteStudent
|DeleteStudentSuccess
|DeleteStudentFail