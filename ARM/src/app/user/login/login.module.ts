import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {ErrorLoginComponent} from './error-login/error-login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    ErrorLoginComponent
  ]
})
export class LoginModule { }
