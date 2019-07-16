import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'manufacFilter'
})
export class ManufacFilterPipe implements PipeTransform {

  transform(medicineList, searchMed) {
    if (medicineList.length === 0 || searchMed === '') {
      return medicineList;
    }

    return medicineList.filter(medicine => medicine.recommend.toLowerCase().indexOf(searchMed.toLowerCase()) !== -1);
  }

}
