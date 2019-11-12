import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from '../models/products';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProductListService {


  private REST_API_GET_PRODUCTS = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }

  public getProductList(): Observable<any> {
    return this.httpClient.get(this.REST_API_GET_PRODUCTS);
  }

}
