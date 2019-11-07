import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule } from '@angular/router';

const ordersRoute = [
  {
    path: '', component: OrdersComponent
  }
]

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ordersRoute)
  ]
})
export class OrdersModule { }
