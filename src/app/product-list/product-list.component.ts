import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

productList = [];
breakpoint: number;

constructor(private productListService : ProductListService) { }

ngOnInit() {
  this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  this.productListService.getProductList().subscribe((data: any[])=>{
        this.productList = data;
   })
  }

  onResize(event) {
      this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
    }

}
