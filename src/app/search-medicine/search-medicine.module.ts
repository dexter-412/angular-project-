import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchMedlistComponent} from './search-medlist/search-medlist.component';
import {FormsModule} from '@angular/forms';
import {PipesModule} from '../_pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule
  ],
  declarations: [
    SearchMedlistComponent
  ]
})
export class SearchMedicineModule { }
