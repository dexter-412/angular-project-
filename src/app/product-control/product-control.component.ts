import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductControlService} from './product-control.service';

@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.css']
})
export class ProductControlComponent implements OnInit {
  medicineList: Array<any> = [];
  searchMed: string = '';
  searchMedman: string = '';
  currentEditMedicineId: number;
  editMedicineForm: FormGroup;
  addNewMedicineForm: FormGroup;
  addNewMedicineWindow: boolean = false;

  constructor(private productControlService: ProductControlService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getMedicines();
    this.createAddNewMedicineForm();
  }

  public getMedicines(): void {
    this.productControlService.getMedicineListWithPaging().subscribe((medicineList: Array<object>) => {
      this.medicineList = medicineList;
    });
  }

  public removeMedicine(medicineId: number): void {
    this.productControlService.removeMedicine(medicineId).subscribe();
    this.medicineList = this.medicineList.filter(medicine => medicine.id !== medicineId);
  }

  public openMedicineEdit(medicineId: number): void {
    this.currentEditMedicineId = medicineId;
    this.createEditMedicineForm();
  }

  private createEditMedicineForm(): void {
    this.medicineList.forEach((medicine) => {
      if (medicine.id === this.currentEditMedicineId) {
        this.editMedicineForm = this.fb.group({
          title: [medicine.title || '', [Validators.required]],
          price: [medicine.price || '', [Validators.required]],
          count: [medicine.count || '', [Validators.required]],
          description: [medicine.description || '', [Validators.required]],
          recommend: [medicine.recommend || '', [Validators.required]]
        });
      }
    });
  }

  private createAddNewMedicineForm(): void {
    this.addNewMedicineForm = this.fb.group({
      newMedicineTitle: ['', [Validators.required]],
      newMedicinePrice: ['', [Validators.required]],
      newMedicineCount: ['', [Validators.required]],
      newMedicineDescription: ['', [Validators.required]],
      newMedicineRecommend: ['', [Validators.required]]
    });
  }

  get title() {
    return this.editMedicineForm.get('title');
  }

  get price() {
    return this.editMedicineForm.get('price');
  }

  get count() {
    return this.editMedicineForm.get('count');
  }

  get description() {
    return this.editMedicineForm.get('description');
  }

  get recommend() {
    return this.editMedicineForm.get('recommend');
  }

  get newMedicineTitle() {
    return this.addNewMedicineForm.get('newMedicineTitle');
  }

  get newMedicinePrice() {
    return this.addNewMedicineForm.get('newMedicinePrice');
  }

  get newMedicineCount() {
    return this.addNewMedicineForm.get('newMedicineCount');
  }

  get newMedicineDescription() {
    return this.addNewMedicineForm.get('newMedicineDescription');
  }

  get newMedicineRecommend() {
    return this.addNewMedicineForm.get('newMedicineRecommend');
  }

  public saveMedicineChanges(): void {
    const editedMedicineData = {
      title: this.title.value,
      price: this.price.value,
      count: this.count.value,
      description: this.description.value,
      recommend: this.recommend.value
    };
    this.productControlService.updateMedicineInfo(this.currentEditMedicineId, editedMedicineData).subscribe(() => {
      this.medicineList.forEach((medicine) => {
        if (medicine.id === this.currentEditMedicineId) {
          medicine.title = editedMedicineData.title;
          medicine.price = editedMedicineData.price;
          medicine.count = editedMedicineData.count;
          medicine.description = editedMedicineData.description;
          medicine.recommend = editedMedicineData.recommend;
        }
      });
      this.currentEditMedicineId = null;
    });
  }

  public cancelMedicineEdit(): void {
    this.currentEditMedicineId = null;
  }

  public openAddNewMedicineWindow(): void {
    this.addNewMedicineWindow = !this.addNewMedicineWindow;
  }

  public cancelAddNewMedicine(): void {
    this.addNewMedicineWindow = false;
    this.createAddNewMedicineForm();
  }

  public addNewMedicine(): void {
    const newMedicineData = {
      title: this.newMedicineTitle.value,
      price: this.newMedicinePrice.value,
      count: this.newMedicineCount.value,
      description: this.newMedicineDescription.value,
      recommend: this.newMedicineRecommend.value
    };
    this.productControlService.addNewMedicine(newMedicineData).subscribe((newMedicine) => {
      this.addNewMedicineWindow = false;
      this.createAddNewMedicineForm();
      this.medicineList.unshift(newMedicine);
    });
  }

}
