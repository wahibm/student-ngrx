import {  Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as studentActions from '../state/student.action';
import * as fromStudent from '../state/student.reducer';
import { Store, select } from '@ngrx/store';

import { Observable, observable, Subscription } from 'rxjs';
import { Student } from '../student.model';
import { MatDialog } from '@angular/material/dialog';
import { StudentAddComponent } from '../student-add/student-add.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'birthDate',
    'isActive',
    'actions',
  ];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource();
  student?: Student;
  studentSubscription$?: Subscription;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;  
  constructor(
    private store: Store<fromStudent.AppState>,
    private router: Router,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.store.dispatch(new studentActions.LoadStudents());
    this.studentSubscription$ = this.store
      .pipe(select(fromStudent.getStudents))
      .subscribe({
        next: (event) => {
          this.dataSource.data = event;
          setTimeout(() => {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          }, 0);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
  ngAfterViewInit() {
  /*  this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;*/
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

 

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentAddComponent, {
      width: '300px',
      height: '350px',
      data: this.student,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.student = result;
    });
  }
  editStudent(id: number) {
    this.router.navigate([`student/edit/${id}`]);
  }

  deleteStudent(id: number) {
    if (confirm('Are You Sure You want to Delete the Student?')) {
      this.store.dispatch(new studentActions.DeleteStudent(id));
    }
  }
}
