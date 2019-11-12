import { Component, OnInit, Input } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage/localstorage.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  selected: boolean = false;
  @Input() product: Product;

  constructor(private localstorageService: LocalstorageService) { }

  ngOnInit() {
    this.retriveFromStorage();
  }

  retriveFromStorage() {
    let cartItems = this.localstorageService.getCartItems();
    if (cartItems.length > 0) {
      this.selected = cartItems.filter(prod => prod.id === this.product.id).length > 0 ? true : false;
    }
  }

  addToCart(product: Product) {
    this.selected = true;
    this.localstorageService.addToCart(product);
  }

  removeFromCart(id: number) {
    this.localstorageService.removeFromCart(id);
    this.selected = false;
  }

}
