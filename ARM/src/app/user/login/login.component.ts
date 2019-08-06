import {Component, EventEmitter, HostListener, OnDestroy, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ListenerService } from '../../_services/listener.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  @Output() onFilter: EventEmitter<any> = new EventEmitter();

  loginForm: FormGroup;

  private subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private listener: ListenerService) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public onSubmit(): void {
    this.subscriptions.push(this.userService.logInUser(this.email.value, this.password.value)
      .subscribe((login: Boolean) => {
        if (login) {
          this.listener.filter(true);
          this.router.navigate(['account']);
        } else {
          this.router.navigate(['login/error']);
        }
      })
    );
  }

  ngOnDestroy () {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  @HostListener('document:keypress', ['$event'])
  private handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.loginForm.valid &&  this.router.url === '/login') {
      this.onSubmit();
    }
  }


}
