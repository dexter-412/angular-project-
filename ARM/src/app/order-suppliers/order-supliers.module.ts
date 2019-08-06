import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderSuppliersComponent} from './order-suppliers.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    OrderSuppliersComponent
  ]
})
export class OrderSupliersModule { }
