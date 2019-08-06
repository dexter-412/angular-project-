import {Component, HostListener, OnInit} from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { compareValidator } from '../../../_directives/compare-validator.directive';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  user: any = {};
  changeUserDataForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.userService.getCurrentUser(sessionStorage.getItem('user_id')).subscribe((user: object) => {
      this.user = user;
      this.createForm();
    });
  }

  private createForm(): void {
    this.changeUserDataForm = this.fb.group({
      password: [`${this.user.password}`, Validators.required],
      passwordConfirm: [`${this.user.password}`, [Validators.required, compareValidator('password')]],
      firstName: [`${this.user.firstName}`, Validators.required],
      lastName: [`${this.user.lastName}`, Validators.required],
      age: [`${this.user.age}`, Validators.required]
    });
  }

  get password() {
    return this.changeUserDataForm.get('password');
  }

  get passwordConfirm() {
    return this.changeUserDataForm.get('passwordConfirm');
  }

  get firstName() {
    return this.changeUserDataForm.get('firstName');
  }

  get lastName() {
    return this.changeUserDataForm.get('lastName');
  }

  get age() {
    return this.changeUserDataForm.get('age');
  }

  public saveChanges(): void {
    this.user.password = this.password.value;
    this.user.firstName = this.firstName.value;
    this.user.lastName = this.lastName.value;
    this.user.age = this.age.value;
    this.userService.changeUserData(this.user).subscribe(() => {
      this.router.navigate(['account']);
    });
  }

  public cancelChanges(): void {
    this.router.navigate(['account']);
  }

  @HostListener('document:keypress', ['$event'])
  private handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.changeUserDataForm.valid) {
      this.saveChanges();
    }
  }

}
