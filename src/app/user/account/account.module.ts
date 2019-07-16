import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AccountEditComponent} from './account-edit/account-edit.component';
import {AccountComponent} from './account.component';
import {RouterModule} from '@angular/router';
import {TabsModule} from 'ngx-bootstrap';
import { ChecksModalWindowComponent } from './checks-modal-window/checks-modal-window.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule, MatCheckboxModule, MatDialogModule} from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  declarations: [
    AccountEditComponent,
    AccountComponent,
    ChecksModalWindowComponent
  ],
  providers: [{
    provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}
  }],
  entryComponents: [ChecksModalWindowComponent]
})
export class AccountModule { }
