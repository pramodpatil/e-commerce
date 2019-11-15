import { Injectable } from '@angular/core';
import { Product } from '../../models/products';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  
  private storeCartData: Product[];
  
  constructor() { 
    this.storeCartData = this.getCartItems() || [];
    console.log(this.storeCartData);
  }

  setItem () {
    localStorage.setItem('cart-items', JSON.stringify(this.storeCartData));
  }

  addToCart(data:Product) {
    this.storeCartData.push(data);
    this.setItem();
  }

  getCartItems() {
    return JSON.parse(localStorage.getItem('cart-items'));
  }

  emptyStorage(key) {
      this.storeCartData = [];
      localStorage.removeItem('cart-items');
  }

  removeFromCart(id: number) {
    this.storeCartData = this.storeCartData.filter( prod => prod.id != id )
    this.setItem();
  }
  
}
