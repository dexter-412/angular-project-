import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-window',
  templateUrl: './checks-modal-window.component.html',
  styleUrls: ['./checks-modal-window.component.css']
})
export class ChecksModalWindowComponent implements OnInit {
  totalPrice: number = 0;
  constructor(private matDialogRef: MatDialogRef<ChecksModalWindowComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

    this.data.medList.forEach(value => {
      this.totalPrice += value.count * value.price;
    })
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


