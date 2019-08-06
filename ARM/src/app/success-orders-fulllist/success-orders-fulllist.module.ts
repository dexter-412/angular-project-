import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuccessOrdersFulllistComponent} from './success-orders-fulllist.component';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  declarations: [
    SuccessOrdersFulllistComponent
  ]
})
export class SuccessOrdersFulllistModule { }
