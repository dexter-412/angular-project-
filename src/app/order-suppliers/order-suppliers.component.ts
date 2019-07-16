import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderSuppliersService} from './order-suppliers.service';

@Component({
  selector: 'app-order-suppliers',
  templateUrl: './order-suppliers.component.html',
  styleUrls: ['./order-suppliers.component.css']
})
export class OrderSuppliersComponent implements OnInit {
  orderDate: Date = null;
  emptyDateInput: boolean = false;
  orderList: Array<any> = [];
  addMedicineToOrderForm: FormGroup;

  constructor(private fb: FormBuilder, private orderSuppliersService: OrderSuppliersService) { }

  ngOnInit() {
    this.createAddMedicineToOrderForm();
  }

  public createOrder(): void {
    if (!this.orderDate) {
      this.emptyDateInput = true;
      setTimeout(() => {
        this.emptyDateInput = false;
      }, 3000);
      return;
    }
    this.orderSuppliersService.createNewOrder(this.orderList, this.orderDate).subscribe(() => {
      this.createAddMedicineToOrderForm();
      this.orderDate = null;
      this.orderList = [];
      alert('Ваше замовлення успішно створене');
    });
  }

  private createAddMedicineToOrderForm(): void {
    this.addMedicineToOrderForm = this.fb.group({
      title: ['', [Validators.required]],
      count: ['', [Validators.required]]
    });
  }

  get title() {
    return this.addMedicineToOrderForm.get('title');
  }

  get count() {
    return this.addMedicineToOrderForm.get('count');
  }

  public addMedicineToOrder(): void {
    const newMedicine = {
      title: this.title.value,
      count: this.count.value
    };
    this.orderList.push(newMedicine);
    this.createAddMedicineToOrderForm();
  }

  public removeFromOrder(medicineIndex): void {
    this.orderList.splice(medicineIndex, 1);
  }
}
