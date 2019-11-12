import { Component, OnInit } from '@angular/core';
import { OrderService } from './order-service';
import { Order } from '../../models/orders';
import { getLocaleExtraDayPeriods } from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
  providers: [OrderService]
})
export class OrdersSummaryComponent implements OnInit {

  displayedColumns: string[] = ['name', 'item', 'price', 'status'];
  dataSource: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrderSummary();
  }

  getOrderSummary() {
    this.orderService.getOrderList().subscribe((res: Order[]) => {
      this.dataSource = res;
    });
  }

}


