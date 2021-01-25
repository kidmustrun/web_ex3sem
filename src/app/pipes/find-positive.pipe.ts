import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findPositive'
})
export class FindPositivePipe implements PipeTransform {

  transform(products, find) {
    if (!find) {
    return products;
    }
    return products.filter(
    function (element) {
    if (element.quantity > 0){
      return element
    }
    
  
  });
}

}
