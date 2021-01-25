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
searchCategory:String;
addForm : FormGroup = new FormGroup({
             
  "title": new FormControl("",Validators.required),
  "id": new FormControl("",[Validators.required, Validators.min(1)]),
  "price": new FormControl("", [Validators.required, Validators.min(1)]),
  "creator": new FormControl(""),
  "type": new FormControl("", Validators.required),
  "weight": new FormControl("", [Validators.required, Validators.min(0)]),
  "quantity": new FormControl("", [Validators.required, Validators.min(0)]),
 
  
});
editForm : FormGroup = new FormGroup({
             
  "title": new FormControl("",Validators.required),
  "id": new FormControl("",[Validators.required, Validators.min(1)]),
  "price": new FormControl("", [Validators.required, Validators.min(1)]),
  "creator": new FormControl(""),
  "type": new FormControl("", Validators.required),
  "weight": new FormControl("", [Validators.required, Validators.min(0)]),
  "quantity": new FormControl("", [Validators.required, Validators.min(0)]),
 
  
});

onDeleteProduct(id: number|string) {
  let index = this.products.findIndex((product) => product.id === id);
  let idForRequest:string = String(this.products[index].id);

  if (index !== -1) {
    this.products.splice(index, 1);
    this.DatebaseService.deleteData(idForRequest).subscribe((data) => idForRequest=data);
    
  }
  
}
onAddProduct(){
  let product_add:Product = {
    id: this.addForm.controls["id"].value,
  title: this.addForm.controls["title"].value,
  price: this.addForm.controls["price"].value,
  creator: this.addForm.controls["creator"].value,
  type: this.addForm.controls["type"].value,
  weight: this.addForm.controls["weight"].value,
  quantity: this.addForm.controls["quantity"].value} 
 
 
      this.products.push(product_add);
      this.DatebaseService.postData(product_add).subscribe((data:Product) => product_add=data);
    
  
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
    if (index !== -1) {
      this.products.splice(index, 1, product_edit);
      this.DatebaseService.putData(product_edit).subscribe((data:Product) => product_edit=data);
    }
  
}
addQuantity(id){
  let index = this.products.findIndex((product) => product.id === id);
  if (index !== -1) {
    this.products[index].quantity+=1;
    let product_edit =  this.products[index];
    this.products.splice(index, 1, product_edit);
    this.DatebaseService.putData(product_edit).subscribe((data:Product) => product_edit=data);
  }
}
minusQuantity(id){
  let index = this.products.findIndex((product) => product.id === id);
  if (index !== -1 && this.products[index].quantity>0) {
    this.products[index].quantity-=1;
    let product_edit =  this.products[index];
    this.products.splice(index, 1, product_edit);
    this.DatebaseService.putData(product_edit).subscribe((data:Product) => product_edit=data);
  }
}
showForm(id){
  let form = document.getElementById(id);
  form.classList.toggle("d-none");
 
}
direction=0;
  sorting= 'price';
  findPositive=0;
reverseSortPrice(){
  
  this.sorting = 'price';
 if(this.direction)
 this.direction = 0;
  else this.direction = 1;
  
}
reverseSortQuantity(){
  this.sorting = 'quantity';
  if(this.direction)
  this.direction = 0
    else this.direction = 1;
  
}
positiveQuantity(){
  if(this.findPositive)
  this.findPositive = 0
    else this.findPositive = 1;
  
}

  
}
