import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { LocalstorageService } from '../services/localstorage/localstorage.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: Product[];
  displayedColumns: string[] = ['imagePath', 'title', 'price'];
  dataSource;

  constructor(private localstorageService: LocalstorageService) { }

  ngOnInit() {
    this.cartItems = this.localstorageService.getCartItems();
    this.dataSource = this.cartItems;
  }

}

