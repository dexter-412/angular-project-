import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {compareValidator} from '../../_directives/compare-validator.directive';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  registrationForm: FormGroup;

  private subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      emailConfirm: ['', [Validators.required, compareValidator('email')]],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required, compareValidator('password')]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get emailConfirm() {
    return this.registrationForm.get('emailConfirm');
  }

  get passwordConfirm() {
    return this.registrationForm.get('passwordConfirm');
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get age() {
    return this.registrationForm.get('age');
  }

  public onSubmit(): void {
    this.subscriptions.push(this.userService.getUsersByEmail(this.email.value)
      .subscribe((boolean: Boolean) => {
        if (!boolean) {
          const userData = {
            email: this.email.value,
            password: this.password.value,
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            age: this.age.value
          };
          this.subscriptions.push(this.userService.createNewUser(userData).subscribe());
          this.router.navigate(['registration/success']);
        } else {
          this.router.navigate(['registration/error']);
        }
      })
    );
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.registrationForm.valid &&  this.router.url === '/registration') {
      this.onSubmit();
    }
  }

}

