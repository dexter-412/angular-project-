import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderSuppliersService {

  private url: string = 'http://localhost:3000/supplies-orders';

  constructor(private http: HttpClient) {}

  public createNewOrder(newOrderMedicines: Array<object>, newOrderDate: Date): Observable<object> {
    const newOrderData = {
      medList: newOrderMedicines,
      date: newOrderDate
    };
    return this.http.post(this.url, newOrderData);
  }

}


