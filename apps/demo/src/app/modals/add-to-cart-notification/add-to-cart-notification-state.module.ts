import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { AddToCartNotificationEffects } from './effects/add-to-cart-notification.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      AddToCartNotificationEffects
    ]),
    StoreModule.forFeature('foundationAddToCartNotification', reducers)
  ]
})
export class FoundationAddToCartNotificationStateModule { }
