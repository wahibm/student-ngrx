import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
{path:"student",
loadChildren: () => import('../app/students/students.module').then(m => m.StudentsModule)},
{ path: '',   redirectTo: '/student/list', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
