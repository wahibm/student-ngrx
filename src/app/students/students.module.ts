import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
//component Import
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
//Material Import
import {MatFormFieldModule}from "@angular/material/form-field";
import {MatInputModule}from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


//Ngrx Import
import { StoreModule } from '@ngrx/store';
import {EffectsModule,Actions}from "@ngrx/effects";
import { studentReducer } from './state/student.reducer';
import { StudentEffect } from './state/student.effects';





const StudentsRoutes:Routes=[
  
{path:"list",component:StudentListComponent},
{path:"edit/:id",component:StudentEditComponent} 
]
@NgModule({
  declarations: [
    StudentAddComponent,
    StudentEditComponent,
    StudentListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(StudentsRoutes),
    StoreModule.forFeature("students",studentReducer),
    EffectsModule.forFeature([StudentEffect]),
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatTableModule,
    MatNativeDateModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  exports: [ MatFormFieldModule, MatInputModule, RouterModule]

  
})
export class StudentsModule { }
