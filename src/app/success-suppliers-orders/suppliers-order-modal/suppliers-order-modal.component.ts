import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-window',
  templateUrl: './suppliers-order-modal.component.html',
  styleUrls: ['./suppliers-order-modal.component.css']
})
export class SuppliersOrderModalComponent implements OnInit {
  totalPrice: number = 0;
  constructor(private matDialogRef: MatDialogRef<SuppliersOrderModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.data.medList.forEach((count) => this.totalPrice = this.totalPrice + count.price * count.count);
  }

  printCheck(): void {
    const orderCheck = window.open('', 'PRINT');

    orderCheck.document.write('<html><head><title>' + document.title  + '</title>');
    orderCheck.document.write('</head><body >');
    orderCheck.document.write('<h1>' + document.title  + '</h1>');
    orderCheck.document.write(document.getElementById('checkBody').innerHTML);
    orderCheck.document.write('</body></html>');

    orderCheck.document.close();
    orderCheck.focus();
    orderCheck.print();
    orderCheck.close();
  }

}


