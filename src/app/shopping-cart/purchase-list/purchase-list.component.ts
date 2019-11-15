import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage/localstorage.service';
import { Product } from '../../models/products';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-purchase-list',
    templateUrl: './purchase-list.component.html',
    styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {

    private sum = 0;
    private value;
    showMsg: boolean = false;

    Products: Product[];
    title = 'Purchase List';
    dataSource;
    displayedColumns: string[] = ['imagePath', 'title', 'price'];




    constructor(private localstorageService: LocalstorageService) { }

    ngOnInit() {
        this.Products = this.localstorageService.getCartItems();
        this.dataSource = this.Products;
    }



    /* constructor(private httpService: HttpClient) {}
     ngOnInit() {
         this.sum = 0;
         this.httpService.get('./assets/mock/Products.json').subscribe(
             data => {
                 this.Products = data as Product[];
    this.dataSource = data as Product[];
   
},
(err: HttpErrorResponse) => {
    console.log(err.message);
}
);
}*/

    purchase() {
        this.showMsg = true;
        this.sum = 0;
        this.localstorageService.emptyStorage('cart-items');
        this.Products = this.localstorageService.getCartItems();
        this.dataSource = this.Products;
        
        // alert('Items purchased Successfully:');
    }

    get totalPrice(): number {
        this.value = this.Products;
        if (this.value != null) {
            for (let j = 0; j < this.value.length; j++) {
                this.sum += this.value[j].price;
            }
        }
        
        return this.sum;
    }




}

