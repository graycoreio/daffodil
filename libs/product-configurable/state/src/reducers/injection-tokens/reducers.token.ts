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

import { DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS } from './extra.token';
import { daffConfigurableProductReducers } from '../configurable-product-reducers';
import { DaffConfigurableProductReducersState } from '../configurable-product-reducers-state.interface';

export const {
  /**
   * An internal token to hold the Daffodil configurable product reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_PRODUCT_CONFIGURABLE_REDUCERS,
  provider: daffProvideProductConfigurableReducers,
} = createSingleInjectionToken<ActionReducer<DaffConfigurableProductReducersState>>(
  'DAFF_PRODUCT_CONFIGURABLE_REDUCERS',
  {
    factory: () => daffComposeReducers([
      combineReducers(daffConfigurableProductReducers),
      ...inject(DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS),
    ]),
  },
);
