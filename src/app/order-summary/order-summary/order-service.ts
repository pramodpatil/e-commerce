import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Order } from '../../models/orders';

@Injectable()
export class OrderService {

  private REST_API_GET_ORDERS = "http://localhost:3000/orders";

  constructor(private http: HttpClient) {
    
  }

  getOrderList(): Observable<any> {
    return this.http.get(this.REST_API_GET_ORDERS);
  }
}