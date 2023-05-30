import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CompleteComponent } from './complete/complete.component';
import { UncompleteComponent } from './uncomplete/uncomplete.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'list',
    component:ListComponent
  },
  {
    path:'list/:id',
    component:ListComponent
  },
  {
    path:'completed',
    component:CompleteComponent
  },
  {
    path:'uncompleted',
    component:UncompleteComponent
  },
  {
    path:'',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
