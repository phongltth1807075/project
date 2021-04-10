import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {OutsideRoutingModule} from './outside-routing.module';
import {OutsideComponent} from './outside.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    OutsideComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    OutsideRoutingModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    OutsideComponent
  ],
})
export class OutsideModule { }
