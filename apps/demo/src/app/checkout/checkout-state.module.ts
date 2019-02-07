import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CheckoutEffects } from './effects/checkout.effects';
import { CartResolverEffects } from '../cart/routing-resolvers/effects/cart-resolver.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('demoCheckout', reducers),
    EffectsModule.forFeature([
      CheckoutEffects,
      CartResolverEffects
    ])
  ]
})
export class DemoCheckoutStateModule { }
