import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CheckoutEffects } from './effects/checkout.effects';
import { reducers } from './reducers';
import { CartResolverEffects } from '../cart/routing-resolvers/effects/cart-resolver.effects';

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
