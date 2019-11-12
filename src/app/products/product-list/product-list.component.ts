import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';

import { Product } from '../../models/products';
import { LocalstorageService } from '../../services/localstorage/localstorage.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductListService]
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];


  constructor(
    private productListService: ProductListService,
    private localstorageService: LocalstorageService
  ) { }

  ngOnInit() {
    this.productListService.getProductList().subscribe((data: Product[]) => {
      this.productList = data;
    })
  }
}
