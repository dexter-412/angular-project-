import { Injectable } from '@angular/core';
import { HttpWrapper } from '../_services/http-wrapper.service';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000/users';

  constructor(private httpW: HttpWrapper, private http: HttpClient) {
  }

  public logInUser(email: string, password: string): Observable<boolean> {
    const parameters = {
      email: email,
      password: password
    };

    return this.httpW.get(`${this.url}`, parameters).pipe(map((user) => {
      if (user.length) {
        sessionStorage.setItem('user_id', user[0].id);
        this.addUserKey(user[0]).subscribe();
        return true;
      } else {
        return false;
      }
    }));
  }

  public getUsersByEmail(email: string): Observable<boolean> {
    const parameters = {
      email: email
    };

    return this.httpW.get(`${this.url}`, parameters).pipe(map((user) => {

      if (user.length) {
        return true;
      } else {
        return false;
      }
    }));
  }

  public createNewUser(userData: object): Observable<object> {
    return this.httpW.post(`${this.url}`, userData);
  }

  private addUserKey(user: any): Observable<object> {
    user.loginKey = this.generateLoginKey();
    sessionStorage.setItem('user_key', user.loginKey);

    return this.httpW.put(`${this.url}/${user.id}`, user);
  }

  private generateLoginKey(): number {
    return Math.floor(Math.random() * (100000000 - 100000)) + 100000;
  }

  public getCurrentUser(id): Observable<object> {
    return this.httpW.get(`${this.url}/${id}`);
  }

  public changeUserData(user): Observable<object> {
    return this.httpW.put(`${this.url}/${user.id}`, user);
  }

  public getCheckList(): Observable<object> {
    return this.http.get(`http://localhost:3000/checks-complete`);
  }
  public getSuccessOrderList(): Observable<object> {
    return this.http.get(`http://localhost:3000/success-orders`);
  }

  public getFullOrderModal(id): Observable<object> {
    return this.http.get(`http://localhost:3000/success-orders/${id}`);
  }

  public getFullSuppliersOrderModal(id): Observable<object> {
    return this.http.get(`http://localhost:3000/supplies-orders/${id}`);
  }

  public getSuccessSuppliersOrdersList(): Observable<object> {
    return this.http.get(`http://localhost:3000/supplies-orders/`);
  }

}
