import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpWrapper } from './http-wrapper.service';
import { GlobalEventService } from './global-events.service';
import { StorageService } from './storage.service';
import { ListenerService } from './listener.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    HttpWrapper,
    GlobalEventService,
    StorageService,
    ListenerService
  ],
  declarations: []
})
export class ServicesModule { }
