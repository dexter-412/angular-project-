import {Component, HostListener, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-login',
  templateUrl: './error-login.component.html',
  styleUrls: ['./error-login.component.css']
})
export class ErrorLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  public backToLogin(): void {
    this.router.navigate(['login']);
  }


  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.backToLogin();
    }
  }
}
