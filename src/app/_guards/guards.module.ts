import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanActivateViaAuthGuard } from './can-activate-via-auth.guard';
import { CanActivateNotAuthGuard } from './can-activate-not-auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CanActivateViaAuthGuard,
    CanActivateNotAuthGuard
  ],
  declarations: []
})
export class GuardsModule { }
