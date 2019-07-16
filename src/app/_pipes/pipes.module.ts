import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleFilterPipe} from './title-filter.pipe';
import {ManufacFilterPipe} from './manufac-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TitleFilterPipe,
    ManufacFilterPipe
  ],
  exports: [
    TitleFilterPipe,
    ManufacFilterPipe
  ]
})
export class PipesModule { }
