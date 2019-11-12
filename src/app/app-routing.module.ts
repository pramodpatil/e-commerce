import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './products/product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PurchaseListComponent } from './shopping-cart/purchase-list/purchase-list.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'order-summary', loadChildren: './order-summary/order-summary.module#OrderSummaryModule'}, 
    { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'purchase-list', component: PurchaseListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
