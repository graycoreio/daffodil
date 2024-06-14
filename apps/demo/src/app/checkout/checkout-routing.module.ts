import {
  NgModule,
  inject,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';

import {
  DaffCartInStockItemsGuard,
  DaffCartItemsGuard,
  DaffCartRoutingModule,
  DaffResolveCartGuard,
} from '@daffodil/cart/routing';
import { daffRouterComposeGuards } from '@daffodil/router';

import { DemoCheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { ThankYouViewComponent } from '../thank-you/pages/thank-you-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    children: [
      { path: '', component: DemoCheckoutViewComponent },
      { path: 'thank-you', component: ThankYouViewComponent },
    ],
    canActivate: [
      (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const resolveCart = inject(DaffResolveCartGuard);
        const cartItems = inject(DaffCartItemsGuard);
        const inStock = inject(DaffCartInStockItemsGuard);

        return daffRouterComposeGuards([
          resolveCart.canActivate.bind(resolveCart),
        ], [
          cartItems.canActivate.bind(cartItems),
          inStock.canActivate.bind(inStock),
        ])(route, state);
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    DaffCartRoutingModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class CheckoutRoutingModule { }
