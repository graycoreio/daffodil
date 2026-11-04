import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { provideDaffCartState } from '@daffodil/cart/types/daffodil-cart-state';
import { provideDaffOrderState } from '@daffodil/order/state';

import { DaffCheckoutOrderEffects } from './order/effects/order.effects';
import { DAFF_CHECKOUT_STORE_FEATURE_KEY } from './reducers/feature-key.const';
import {
  DAFF_CHECKOUT_REDUCERS,
  DAFF_CHECKOUT_STORE_CONFIG,
} from './reducers/injectable.token';

/**
 * Provides the `@daffodil/checkout/state` feature states.
 * Includes {@link provideDaffOrderState}, which itself includes {@link provideDaffCartState}.
 */
export const provideDaffCheckoutState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffOrderState(),
  provideDaffCartState(),
  provideState(DAFF_CHECKOUT_STORE_FEATURE_KEY, DAFF_CHECKOUT_REDUCERS, DAFF_CHECKOUT_STORE_CONFIG),
  provideEffects(
    DaffCheckoutOrderEffects,
  ),
]);
