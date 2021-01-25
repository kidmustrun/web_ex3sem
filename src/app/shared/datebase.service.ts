import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatebaseService {
  
  constructor(private http: HttpClient){ }
      
  getData(){
      return this.http.get('http://localhost:3000/products')
  }
  postData(product){
    const headers = { 'content-type': 'application/json'} 
    const body=JSON.stringify(product);
    return this.http.post('http://localhost:3000/products',body,{'headers':headers})

   
  }
  putData(product){
    const headers = { 'content-type': 'application/json'} 
    const body=JSON.stringify(product);
    return this.http.put(`http://localhost:3000/products/${product.id}`,body,{'headers':headers})

   
  }
  deleteData(code) {
    return this.http.delete(`http://localhost:3000/products/${code}`, { responseType: 'text' });
  }
}

 