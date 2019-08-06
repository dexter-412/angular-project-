import {Component, OnInit} from '@angular/core';
import {MakeOrderClientService} from './make-order-client.service';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order-client.component.html',
  styleUrls: ['./make-order-client.component.css']
})

export class MakeOrderClientComponent implements OnInit {
  searchMed: string = '';
  searchMedman: string = '';
  medicineList: Array<any> = [];
  orderList: Array<any> = [];
  totalPrice: number = 0;
  saleCost: number = 0;
  notEnoughMedicine: boolean = false;
  sale: number = 1;

  constructor(private makeOrderService: MakeOrderClientService) {
  }

  ngOnInit() {
    this.makeOrderService.getMedicineList().subscribe((medicineList: Array<object>) => {
      this.medicineList = medicineList;
    });
  }

  public  makeSail (): void {
    this.saleCost = (this.totalPrice * this.sale) / 100;
    this.totalPrice = this.totalPrice - this.saleCost;
  }

  public addMedicineToOrder(newMedicine: any): void {
    const currentMedicine = this.medicineList.find(medicine => medicine.id === newMedicine.id);
    if (currentMedicine.active) {
      return;
    }
    this.orderList.push(newMedicine);
    this.recountOrderPrice();
    this.recountMedicine(newMedicine.id, true);
    currentMedicine.active = true;
  }

  public removeFromOrder(medicineIndex: number, medicineId: number, medicineCount: number): void {
    this.recountOrderPrice();
    this.recountMedicine(medicineId, false, medicineCount);
    this.orderList.splice(medicineIndex, 1);
    this.medicineList.forEach((medicine) => {
      if (medicine.id === medicineId) {
        medicine.active = false;
      }
    });
  }

  public createOrder(): void {
    this.clearAllActiveProperties();
    this.makeOrderService.createNewOrder(this.orderList, this.totalPrice, this.saleCost).subscribe(() => {
      this.updateMedicinesCount(this.orderList);
      this.orderList = [];
      alert('Ваше замовлення успішно створене');
    });
  }

  public updateMedicinesCount(orderList: Array<any>): void {
    this.makeOrderService.updateCount(orderList, this.medicineList);
  }

  private recountMedicine(medicineId: number, addToOrder: boolean, medicineCount?: number): void {
    this.medicineList.forEach((medicine) => {
      if (medicine.id === medicineId) {
        if (medicine.count === 0 && addToOrder) {
          this.notEnoughMedicine = true;
          setTimeout(() => {
            this.notEnoughMedicine = false;
          }, 3000);
        } else {
          if (addToOrder) {
            medicine.count --;
          } else {
            if (medicineCount) {
              medicine.count += medicineCount;
            } else {
              medicine.count++;
            }
          }
        }
      }
    });
    this.recountOrderPrice();
  }

  private recountOrderPrice(): void {
    let orderPrice = 0;
    this.orderList.forEach((medicine) => {
      orderPrice += medicine.price * medicine.count;
    });
    this.totalPrice = orderPrice;
  }

  public changeOrderMedicineCount(medicineIndex: number, medicineId: number, value: number): void {
    let canNotAddMore = false;
    this.medicineList.forEach((medicine) => {
      if (medicine.id === medicineId) {
        if (medicine.count === 0 && value > 0) {
          this.notEnoughMedicine = true;
          setTimeout(() => {
            this.notEnoughMedicine = false;
          }, 3000);
          canNotAddMore = true;
        }
      }
    });
    if ((value < 0 && this.orderList[medicineIndex].count === 1) || canNotAddMore) {
      return;
    }
    this.orderList[medicineIndex].count += value;
    if (value < 0) {
      this.recountMedicine(medicineId, false);
    } else {
      this.recountMedicine(medicineId, true);
    }
  }

  private clearAllActiveProperties(): void {
    this.orderList.forEach((medicine) => {
      delete medicine.active;
    });
    this.medicineList.forEach((medicine) => {
      delete medicine.active;
    });
  }
}
