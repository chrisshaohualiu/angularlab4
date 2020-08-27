import { Component, OnInit } from '@angular/core';
import {CartApiService} from '../cart-api.service'
import { Item } from '../interfaces/item';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cartItems: any;
  constructor(private cartApi: CartApiService) { }

  ngOnInit(): void {
    this.updateCart();
 
  }

  updateCart=()=>{
    this.cartApi.getAllItems().subscribe((response)=>{
      this.cartItems = response;
      console.log(this.cartItems);
    })
  }

  deleteItem=(id: number)=>{
    console.log(id);
    this.cartApi.deleteItem(id).subscribe((response)=>{
      console.log("deleting");
    })
    this.updateCart();
  }

  addItem=(form: NgForm)=>{
    let newItem = {
      id: this.cartItems.length+1,
      product: form.value.product,
      price: form.value.price,
      quantity: form.value.quantity,
    }
    this.cartApi.addItem(newItem).subscribe((response)=>{
      console.log(response);
    })
    this.updateCart();

  }

  editItem=(form:NgForm, id:number)=>{
    let newItem ={
      id: id,
      product: form.value.product,
      price: form.value.price,
      quantity: form.value.quantity,
    }
    console.log(newItem);
    this.cartApi.editItem(id, newItem).subscribe((response)=>{
      console.log(response);
    })
    this.updateCart();
  }


}
