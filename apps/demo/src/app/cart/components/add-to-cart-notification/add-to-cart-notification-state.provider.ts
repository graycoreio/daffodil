import {
  importProvidersFrom,
  makeEnvironmentProviders,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffModalService } from '@daffodil/design/modal';

import { AddToCartNotificationEffects } from './effects/add-to-cart-notification.effects';
import { reducers } from './reducers/index';

export const provideAddToCartNotificationState = () => [
  importProvidersFrom(
    StoreModule.forFeature('demoAddToCartNotification', reducers),
    EffectsModule.forFeature([AddToCartNotificationEffects]),
  ),
  makeEnvironmentProviders([
    DaffModalService,
  ]),
];

