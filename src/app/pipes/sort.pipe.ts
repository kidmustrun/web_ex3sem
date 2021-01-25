import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products,sorting,direction) {
   
    if(sorting==='price')
    {if(direction)
    return products.sort((a, b) => a.price - b.price)
    else return products.sort((a, b) => b.price - a.price)}
    if(sorting==='quantity')
    {if(direction)
      return products.sort((a, b) => a.quantity - b.quantity)
      else return products.sort((a, b) => b.quantity - a.quantity);
        
  }
}
}

