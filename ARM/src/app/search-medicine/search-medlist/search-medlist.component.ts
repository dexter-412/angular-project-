import { Component, OnInit } from '@angular/core';

import {SearchMedicineService} from '../search-medicine.service';

@Component({
  selector: 'app-short-story',
  templateUrl: './search-medlist.component.html',
  styleUrls: ['./search-medlist.component.css']
})
export class SearchMedlistComponent implements OnInit {
  searchMed: string = '';
  searchMedman: string = '';
  medicineList: object = [];

  constructor(private catalogService: SearchMedicineService) { }

  ngOnInit() {

    this.catalogService.getMedicineList().subscribe((medicineList: object) => {
      this.medicineList = medicineList;
    })

  }

}
