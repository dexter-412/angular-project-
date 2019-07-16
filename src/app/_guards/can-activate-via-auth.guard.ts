import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from '../user/user.service';


@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate() {
    const id: string = sessionStorage.getItem('user_id');
    if (id && id !== null) {
      return true;
    } else {
      this.router.navigate(['./login']);
      return false;
    }
  }
}
