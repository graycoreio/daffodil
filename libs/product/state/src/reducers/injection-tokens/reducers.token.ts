import {
  inject,
  InjectionToken,
} from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';
// these unused imports are a workaround
import { DaffProduct } from '@daffodil/product';

import { DAFF_PRODUCT_EXTRA_REDUCERS } from './extra.token';
import { daffProductReducers } from '../product-reducers';
import { DaffProductReducersState } from '../product-reducers-state.interface';

/**
 * An internal token to hold the Daffodil cart reducers.
 * Includes the extra and standard reducers.
 *
 * @docs-private
 */
export const DAFF_PRODUCT_REDUCERS = new InjectionToken<ActionReducer<DaffProductReducersState>>(
  'DAFF_PRODUCT_REDUCERS',
  {
    factory: () => daffComposeReducers([
      combineReducers(daffProductReducers),
      ...inject(DAFF_PRODUCT_EXTRA_REDUCERS),
    ]),
  },
);
