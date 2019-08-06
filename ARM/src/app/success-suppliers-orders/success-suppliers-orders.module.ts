import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuccessSuppliersOrdersComponent} from './success-suppliers-orders.component';
import {SuppliersOrderModalComponent} from './suppliers-order-modal/suppliers-order-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  declarations: [
    SuccessSuppliersOrdersComponent,
    SuppliersOrderModalComponent
  ]
})
export class SuccessSuppliersOrdersModule { }
