import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductControlService {


  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/medicines';

  public removeMedicine(medicineId: number): Observable<object> {
    return this.http.delete(`${this.url}/${medicineId}`);
  }

  public updateMedicineInfo(medicineId, editedMedicineData): Observable<object> {
    return this.http.put(`${this.url}/${medicineId}`, editedMedicineData);
  }

  public addNewMedicine(newMedicineData): Observable<object> {
    return this.http.post(this.url, newMedicineData);
  }

  public getMedicineListWithPaging(): Observable<object> {
    return this.http.get(this.url);
  }
}
