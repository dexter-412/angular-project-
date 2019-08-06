import { Injectable } from '@angular/core';
import { HttpWrapper } from '../_services/http-wrapper.service';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchMedicineService {

  private url = 'http://localhost:3000/medicines';

  constructor(private http: HttpClient) { }

  public getMedicineList(): Observable<object> {
    return this.http.get(this.url);
  }




}


