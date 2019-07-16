import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {ChecksModalWindowComponent} from '../user/account/checks-modal-window/checks-modal-window.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-success-orders',
  templateUrl: './success-orders-fulllist.component.html',
  styleUrls: ['./success-orders-fulllist.component.css']
})
export class SuccessOrdersFulllistComponent implements OnInit {
  successOrderList: any = [];
  currentOrder: any;
  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userService.getSuccessOrderList().subscribe((successOrderList: object) =>  {
      this.successOrderList = successOrderList;
      this.successOrderList = this.successOrderList.reverse();
    });
  }

  public openModalOrder(orderId: number) {

    this.userService.getFullOrderModal(orderId).subscribe((currentOrder:object)=>{
      this.currentOrder = currentOrder;
      this.dialog.open(ChecksModalWindowComponent, {
        data: {
          id: this.currentOrder.id,
          date: this.currentOrder.date,
          medList: this.currentOrder.medList,
          totalPrice: this.currentOrder.totalPrice,
          saleCost: this.currentOrder.saleCost
        },
        width: "600px"
      })
    });

  }

}
