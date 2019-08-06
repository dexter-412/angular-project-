import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {LoginModule} from './login/login.module';
import {AccountModule} from './account/account.module';
import {RegistrationModule} from './registration/registration.module';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginModule,
    AccountModule,
    RegistrationModule
  ],
  declarations: [
  ]
})
export class UserModule { }
