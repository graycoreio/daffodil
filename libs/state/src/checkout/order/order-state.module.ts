import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from './effects/order.effects';
import { CartEffects } from '../../cart/effects/cart.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('order', reducers),
    EffectsModule.forFeature([
      OrderEffects,
      // Only here temporarily, until we figure out how to simulate a cart clear on placeOrder in the in memory service
      CartEffects
    ])
  ]
})
export class StateOrderStateModule { }
