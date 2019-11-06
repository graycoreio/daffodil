import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { AddToCartNotificationEffects } from './effects/add-to-cart-notification.effects';
import { demoAddToCartNotificationFeatureKey } from './selectors/add-to-cart-notification.selector';

import { reducer } from './reducers/add-to-cart-notification.reducer';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      AddToCartNotificationEffects
    ]),
    StoreModule.forFeature(demoAddToCartNotificationFeatureKey, reducer)
  ]
})
export class DemoAddToCartNotificationStateModule { }
