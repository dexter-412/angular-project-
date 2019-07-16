import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot()
  ],
  exports: [
    NavComponent,
    FooterComponent,
    HomeComponent
  ],
  declarations: [
    NavComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class CoreModule { }
