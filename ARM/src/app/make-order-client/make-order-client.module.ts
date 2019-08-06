import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MakeOrderClientComponent} from './make-order-client.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PipesModule} from '../_pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [
    MakeOrderClientComponent,

  ]
})
export class MakeOrderClientModule { }
