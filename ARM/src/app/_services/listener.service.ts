import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ListenerService {
  private _loggedIn = new Subject<any>();

  listen(): Observable<any> {
    return this._loggedIn.asObservable();
  }

  filter(loggedIn: boolean) {
    this._loggedIn.next(loggedIn);
  }

}
