import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CartResolverEffects } from '../cart/routing-resolvers/effects/cart-resolver.effects';
import { CheckoutEffects } from './effects/checkout.effects';
import { reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('demoCheckout', reducers),
    EffectsModule.forFeature([
      CheckoutEffects,
      CartResolverEffects,
    ]),
  ],
})
export class DemoCheckoutStateModule { }
