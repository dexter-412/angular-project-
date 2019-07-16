import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-success-registration',
  templateUrl: './success-registration.component.html',
  styleUrls: ['./success-registration.component.css']
})
export class SuccessRegistrationComponent implements OnInit {

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
