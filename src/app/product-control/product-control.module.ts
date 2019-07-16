import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductControlComponent} from './product-control.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PipesModule} from '../_pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductControlComponent,

  ]
})
export class ProductControlModule { }
