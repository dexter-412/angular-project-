import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MakeOrderClientService {

  private url: string = 'http://localhost:3000/success-orders-fulllist';
  private urlMedlist: string = 'http://localhost:3000/medicines';

  constructor(private http: HttpClient) {}

  public createNewOrder(newOrderMedicines: Array<object>, totalPrice: number, saleCost:number): Observable<object> {
    const newOrderData = {
      medList: newOrderMedicines,
      date: formatDate(new Date(), 'dd.MM.yyyy', 'en'),
      totalPrice: totalPrice,
      saleCost: saleCost
    };
    return this.http.post(this.url, newOrderData);
  }

  public updateCount(orderList: Array<any>, oldMedicinesList: Array<any>): void {
    orderList.forEach(medicine => {
      oldMedicinesList.forEach((oldMedicine) => {
        if (oldMedicine.id === medicine.id) {
          medicine.count = oldMedicine.count;
        }
      });
      this.http.put(`http://localhost:3000/medicines/${medicine.id}`, medicine).subscribe();
    });
  }

  public getMedicineList(): Observable<object> {
    return this.http.get(this.urlMedlist);
  }

}


