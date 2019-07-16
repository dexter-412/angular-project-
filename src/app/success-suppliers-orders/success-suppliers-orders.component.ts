import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {SuppliersOrderModalComponent} from './suppliers-order-modal/suppliers-order-modal.component';


@Component({
  selector: 'app-success-orders',
  templateUrl: './success-suppliers-orders.component.html',
  styleUrls: ['./success-suppliers-orders.component.css']
})
export class SuccessSuppliersOrdersComponent implements OnInit {
  successSuppliersOrdersList: any = [];
  currentOrder: any;
  constructor(private userService: UserService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.userService.getSuccessSuppliersOrdersList().subscribe((successSuppliersOrderList: object) =>  {
      this.successSuppliersOrdersList = successSuppliersOrderList;
      this.successSuppliersOrdersList = this.successSuppliersOrdersList.reverse();
    });
  }

  public openModalOrder(orderId: number) {
    this.userService.getFullSuppliersOrderModal(orderId).subscribe((currentOrder: object) => {
      this.currentOrder = currentOrder;
      this.dialog.open(SuppliersOrderModalComponent, {
        data: {
          id: this.currentOrder.id,
          date: this.currentOrder.date,
          medList: this.currentOrder.medList
        },
        width: '600px'
      });
    });
  }

  public goToNewSuppliersOrderPage(): void {
    this.router.navigateByUrl('/order-supplies-create');
  }

}
