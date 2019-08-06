import {Component, HostListener, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-registration',
  templateUrl: './error-registration.component.html',
  styleUrls: ['./error-registration.component.css']
})
export class ErrorRegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public backToRegistration(): void {
    this.router.navigate(['registration']);
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.backToRegistration();
    }
  }
}
