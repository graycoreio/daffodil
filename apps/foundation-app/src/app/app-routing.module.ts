import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductListViewComponent } from './product/pages/product-list-view/product-list-view.component';
import { CartViewComponent } from './cart/pages/cart-view/cart-view.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: ProductListViewComponent
  },
  {
    path: 'product-list',
    component: ProductListViewComponent
  },
  {
    path: 'cart',
    component: CartViewComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}