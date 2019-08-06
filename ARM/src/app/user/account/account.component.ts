import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { TabsetComponent } from 'ngx-bootstrap';
import {MatDialog} from '@angular/material';
import {ChecksModalWindowComponent} from './checks-modal-window/checks-modal-window.component';
import {SearchMedicineService} from '../../search-medicine/search-medicine.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @ViewChild('userTabs') userTabs: TabsetComponent;

  user: any = {};
  checksComplete: any = [];
  successOrderList: any = [];
  currentOrder: any;
  medicineList: Array<any> = [];

  constructor(private userService: UserService, public dialog: MatDialog, private catalogService: SearchMedicineService) { }

  ngOnInit() {
    this.userService.getCurrentUser(sessionStorage.getItem('user_id')).subscribe((user: object) => {
      this.user = user;
    });

    this.userService.getCheckList().subscribe((checksComplete: object) =>  {
      this.checksComplete = checksComplete;
    });

    this.userService.getSuccessOrderList().subscribe((successOrderList: object) =>  {
      this.successOrderList = successOrderList;
      this.successOrderList = this.successOrderList.reverse();
    });

    this.catalogService.getMedicineList().subscribe((medicineList: Array<any>) => {
      medicineList.forEach((medicine) => {
        if (medicine.count <= 5) {
          this.medicineList.push(medicine);
        }
      });
    });
  }

  public openModalOrder(orderId: number) {

    this.userService.getFullOrderModal(orderId).subscribe((currentOrder: object) => {
      this.currentOrder = currentOrder;

      console.log(this.currentOrder.medList);
      this.dialog.open(ChecksModalWindowComponent, {
        data: {
          id: this.currentOrder.id,
          date: this.currentOrder.date,
          medList: this.currentOrder.medList,
          totalPrice: this.currentOrder.totalPrice,
          saleCost: this.currentOrder.saleCost
        },
        width: '600px'
      });
    });

  }

  public selectTab(tab_id: number): void {
    this.userTabs.tabs[tab_id].active = true;
  }

}
