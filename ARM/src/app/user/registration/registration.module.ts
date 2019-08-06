import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationComponent} from './registration.component';
import {ErrorRegistrationComponent} from './error-registration/error-registration.component';
import {SuccessRegistrationComponent} from './success-registration/success-registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule

  ],
  declarations: [
    RegistrationComponent,
    ErrorRegistrationComponent,
    SuccessRegistrationComponent
  ]
})
export class RegistrationModule { }
