import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { EmptyCartResolver } from '../cart/routing-resolvers/resolvers/empty-cart-resolver.service';

import { ThankYouViewComponent } from '../thank-you/pages/thank-you-view.component';
import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    children: [
      { path: '', component: CheckoutViewComponent },
      { path: 'thank-you', component: ThankYouViewComponent },
    ],
    resolve: {
      cartItem: EmptyCartResolver,
    },
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CheckoutRoutingModule { }
