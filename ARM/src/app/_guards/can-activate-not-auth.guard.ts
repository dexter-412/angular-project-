import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';


@Injectable()
export class CanActivateNotAuthGuard implements CanActivate {
  constructor(private router: Router) {

  }

  canActivate() {
    const id: string = sessionStorage.getItem('user_id');
    if (!id && id === null) {
      return true;
    } else {
      this.router.navigate(['./account']);
      return false;
    }
  }
}
