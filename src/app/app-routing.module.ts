import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './crud/list.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './shared/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: LoginComponent },
    { path: 'user-list', component: ListComponent ,canActivate: [AuthGuard],},
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
