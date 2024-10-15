import { inject } from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';
import { daffComposeReducers } from '@daffodil/core/state';
// these unused imports are a workaround
import { DaffOrder } from '@daffodil/order';

import { DAFF_ORDER_EXTRA_REDUCERS } from './extra.token';
import { daffOrderReducer } from '../order/order.reducer';
import { daffOrderEntitiesReducer } from '../order-entities/public_api';
import { DaffOrderReducersState } from '../order-reducers.interface';
import { daffOrdersCollectionReducer } from '../public_api';

export const {
  /**
   * An internal token to hold the Daffodil order reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_ORDER_REDUCERS,
  provider: provideDaffOrderReducers,
} = createSingleInjectionToken<ActionReducer<DaffOrderReducersState>>(
  ' DAFF_ORDER_REDUCERS',
  {
    providedIn: 'any',
    factory: () => daffComposeReducers([
      combineReducers({
        order: daffOrderReducer,
        orders: daffOrderEntitiesReducer,
        collection: daffOrdersCollectionReducer,
      }),
      ...inject(DAFF_ORDER_EXTRA_REDUCERS),
    ]),
  },
);
