import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import {
  combineReducers,
  provideState,
} from '@ngrx/store';

import { provideDaffCartState } from '@daffodil/cart/state';
import { daffComposeReducers } from '@daffodil/core/state';

import { DaffOrderCollectionEffects } from './effects/order-collection.effects';
import { DaffOrderEffects } from './effects/order.effects';
import { daffOrderReducer } from './reducers/order/order.reducer';
import { daffOrderEntitiesReducer } from './reducers/order-entities/public_api';
import {
  daffOrdersCollectionReducer,
  DAFF_ORDER_STORE_FEATURE_KEY,
} from './reducers/public_api';
import { DAFF_ORDER_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_ORDER_REDUCERS,
  provideDaffOrderReducersFactory,
} from './reducers/token/reducers.token';

/**
 * Provides the `@daffodil/order/state` feature state and effects.
 * Includes {@link provideDaffCartState}.
 */
export const provideDaffOrderState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCartState(),
  provideEffects(
    DaffOrderEffects,
    DaffOrderCollectionEffects,
  ),
  provideState(DAFF_ORDER_STORE_FEATURE_KEY, DAFF_ORDER_REDUCERS),
  provideDaffOrderReducersFactory(() => daffComposeReducers([
    combineReducers({
      order: daffOrderReducer,
      orders: daffOrderEntitiesReducer,
      collection: daffOrdersCollectionReducer,
    }),
    ...inject(DAFF_ORDER_EXTRA_REDUCERS),
  ])),
]);
