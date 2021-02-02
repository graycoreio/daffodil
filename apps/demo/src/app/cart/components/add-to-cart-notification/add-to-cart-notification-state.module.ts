import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AddToCartNotificationEffects } from './effects/add-to-cart-notification.effects';
import { reducers } from './reducers/index';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      AddToCartNotificationEffects,
    ]),
    StoreModule.forFeature('demoAddToCartNotification', reducers),
  ],
})
export class DemoAddToCartNotificationStateModule { }
