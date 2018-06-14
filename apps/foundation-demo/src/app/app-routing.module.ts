import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductGridViewComponent } from './product/pages/product-grid-view/product-grid-view.component';
import { CartViewComponent } from './cart/pages/cart-view/cart-view.component';
import { ProductViewComponent } from './product/pages/product-view/product-view.component';
import { NotFoundComponent } from './misc/not-found/not-found.component';
import { CheckoutViewComponent } from './checkout/pages/checkout-view/checkout-view.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/product-grid',
    pathMatch: 'full'
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
    path: 'product/:id',
    component: ProductViewComponent
  },
  {
    path: 'checkout',
    component: CheckoutViewComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
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