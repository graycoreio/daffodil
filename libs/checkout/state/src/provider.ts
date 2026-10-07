import {
  importProvidersFrom,
  makeEnvironmentProviders,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffCartStateModule } from '@daffodil/cart/state';
import { DaffOrderStateModule } from '@daffodil/order/state';

import { DaffCheckoutOrderEffects } from './order/effects/order.effects';
import {
  DAFF_CHECKOUT_REDUCERS,
  DAFF_CHECKOUT_STORE_CONFIG,
} from './reducers/injectable.token';
import { DAFF_CHECKOUT_STORE_FEATURE_KEY } from './reducers/public_api';

/**
 * Provides the state feature for `@daffodil/checkout/state`.
 */
export const provideCheckoutState = () => makeEnvironmentProviders([
  importProvidersFrom(
    DaffCartStateModule,
    DaffOrderStateModule,
    StoreModule.forFeature(DAFF_CHECKOUT_STORE_FEATURE_KEY, DAFF_CHECKOUT_REDUCERS, DAFF_CHECKOUT_STORE_CONFIG),
    EffectsModule.forFeature(
      DaffCheckoutOrderEffects,
    ),
  ),
]);
