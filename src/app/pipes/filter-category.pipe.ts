import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(products, searchCategory: string) {
    if (!searchCategory) {
    return products;
    }
    return products.filter(
    function (element) {
    if (element.type === searchCategory){
      return element
    }
    
  
  });
}

}
