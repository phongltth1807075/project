import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {OutsideComponent} from './outside.component';

const routes: Routes = [
  {
    path: '', component: OutsideComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutsideRoutingModule {
}
