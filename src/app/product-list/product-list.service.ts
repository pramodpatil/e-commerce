import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private REST_API_GET_PRODUCTS = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }

  public getProductList() {
    return this.httpClient.get(this.REST_API_GET_PRODUCTS);
  }

}
