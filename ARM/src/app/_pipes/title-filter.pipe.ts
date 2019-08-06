import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TitleFilterPipe'
})
export class TitleFilterPipe implements PipeTransform {

  transform(medicineList, searchMed) {
   if (medicineList.length === 0 || searchMed === '') {
     return medicineList;
   }

   return medicineList.filter(medicine => medicine.title.toLowerCase().indexOf(searchMed.toLowerCase()) !== -1);
  }

}
