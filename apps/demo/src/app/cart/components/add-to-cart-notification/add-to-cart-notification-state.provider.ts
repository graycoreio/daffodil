import { importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffModalModule } from '@daffodil/design/modal';

import { AddToCartNotificationEffects } from './effects/add-to-cart-notification.effects';
import { reducers } from './reducers/index';

export function provideAddToCartNotificationState() {
  return [
    importProvidersFrom(
      DaffModalModule,
      StoreModule.forFeature('demoAddToCartNotification', reducers),
      EffectsModule.forFeature([AddToCartNotificationEffects]),
    ),
  ];
}
