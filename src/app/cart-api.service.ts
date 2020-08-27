import { Injectable } from '@angular/core';
import {Item} from './interfaces/item'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  constructor(private http: HttpClient) { }

  getAllItems=()=>{
    return this.http.get("http://localhost:3000/cart-items");
  }

  deleteItem(id:number){
    return this.http.delete(`http://localhost:3000/cart-items/${id}`);
  }
  addItem(item:Item){
    return this.http.post("http://localhost:3000/cart-items", item);
  }

  editItem(id:number, item: Item){
    return this.http.put(`http://localhost:3000/cart-items/${id}`, item);
  }
}
