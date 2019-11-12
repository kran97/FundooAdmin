import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AuthGuard } from "../auth.guard";
import { AnswersComponent } from './components/answers/answers.component';
import { AllUsersComponent } from './components/all-users/all-users.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: DashboardComponent, canActivate:[AuthGuard], children: [
      {
        path: 'allUsers', component: AllUsersComponent
      },
      {
        path: 'answers', component: AnswersComponent
      },
      {
        path: '**', redirectTo: ''
      }
    ]
  },
  {
    path: '**', redirectTo: 'login'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
