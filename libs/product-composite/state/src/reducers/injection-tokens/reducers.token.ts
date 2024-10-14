import {
  inject,
  InjectionToken,
} from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';
import { daffComposeReducers } from '@daffodil/core/state';

import { DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS } from './extra.token';
import { daffCompositeProductReducers } from '../composite-product-reducers';
import { DaffCompositeProductReducersState } from '../composite-product-reducers-state.interface';

export const {
  /**
   * An internal token to hold the Daffodil composite product reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_PRODUCT_COMPOSITE_REDUCERS,
  provider: daffProvideProductCompositeReducers,
} = createSingleInjectionToken<ActionReducer<DaffCompositeProductReducersState>>(
  'DAFF_PRODUCT_COMPOSITE_REDUCERS',
  {
    factory: () => daffComposeReducers([
      combineReducers(daffCompositeProductReducers),
      ...inject(DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS),
    ]),
  },
);
