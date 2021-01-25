import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/product.model'
import { DatebaseService } from 'src/app/shared/datebase.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  
 
  
  constructor(private DatebaseService: DatebaseService){}
  ngOnInit(){
         this.DatebaseService.getData().subscribe((data:Product[]) => this.products=data);
         
}
@Input() products: Product[] = [];

editForm : FormGroup = new FormGroup({
             
  "title": new FormControl("",Validators.required),
  "id": new FormControl("",Validators.required),
  "price": new FormControl("", [
              Validators.required, 
              
  ]),
  "creator": new FormControl(""),
  "type": new FormControl("", Validators.required),
  "weight": new FormControl("", Validators.required),
  "quantity": new FormControl("", Validators.required),
 
  
});

onDeleteProduct(id: number|string) {
  let index = this.products.findIndex((product) => product.id === id);
  let idForRequest:string = String(this.products[index].id);

  if (index !== -1) {
    this.products.splice(index, 1);
    this.DatebaseService.deleteData(idForRequest).subscribe((data) => idForRequest=data);
    
  }
  
}

onEditProduct(){
  let product_edit:Product = {
    id: this.editForm.controls["id"].value,
  title: this.editForm.controls["title"].value,
  price: this.editForm.controls["price"].value,
  creator: this.editForm.controls["creator"].value,
  type: this.editForm.controls["type"].value,
  weight: this.editForm.controls["weight"].value,
  quantity: this.editForm.controls["quantity"].value} 
  let index = this.products.findIndex((product) => product.id === product_edit.id);
console.log(typeof(product_edit.id))
    if (index !== -1) {
      this.products.splice(index, 1, product_edit);
      this.DatebaseService.putData(product_edit).subscribe((data:Product) => product_edit=data);
    }
  
}

showForm(id){
  let form = document.getElementById(id);
  form.classList.toggle("d-none");
 
}
  
}
