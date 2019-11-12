import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersSummaryComponent } from './order-summary/order-summary.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const ordersRoute = [
  {
    path: '', component: OrdersSummaryComponent
  }
]

@NgModule({
  declarations: [OrdersSummaryComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ordersRoute)
  ]
})
export class OrderSummaryModule { }
