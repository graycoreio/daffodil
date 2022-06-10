import {
  inject,
  InjectionToken,
} from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';

import { daffCompositeProductReducers } from '../composite-product-reducers';
import { DaffCompositeProductReducersState } from '../composite-product-reducers-state.interface';
import { DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS } from './extra.token';

/**
 * An internal token to hold the Daffodil composite product reducers.
 * Includes the extra and standard reducers.
 *
 * @docs-private
 */
export const DAFF_PRODUCT_COMPOSITE_REDUCERS = new InjectionToken<ActionReducer<DaffCompositeProductReducersState>>(
  'DAFF_PRODUCT_COMPOSITE_REDUCERS',
  {
    factory: () => daffComposeReducers([
      combineReducers(daffCompositeProductReducers),
      ...inject(DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS),
    ]),
  },
);
