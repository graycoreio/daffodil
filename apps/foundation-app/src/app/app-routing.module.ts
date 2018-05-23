import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductGridViewComponent } from './product/pages/product-grid-view/product-grid-view.component';
import { CartViewComponent } from './cart/pages/cart-view/cart-view.component';
import { ProductViewComponent } from './product/pages/product-view/product-view.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: ProductGridViewComponent
  },
  {
    path: 'product-grid',
    component: ProductGridViewComponent
  },
  {
    path: 'cart',
    component: CartViewComponent
  },
  {
    path: 'product:id',
    component: ProductViewComponent
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