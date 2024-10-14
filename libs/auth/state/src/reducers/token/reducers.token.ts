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

import { DAFF_AUTH_EXTRA_REDUCERS } from './extra.token';
import { DaffAuthFeatureState } from '../auth-feature-state.interface';
import { daffAuthReducers } from '../auth-reducers';

export const {
  /**
   * An internal token to hold the Daffodil auth reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_AUTH_REDUCERS,
  provider: daffProvideAuthReducers,
} = createSingleInjectionToken<ActionReducer<DaffAuthFeatureState>>(
  'DAFF_AUTH_REDUCERS',
  {
    factory: () => daffComposeReducers([
      combineReducers(daffAuthReducers),
      ...inject(DAFF_AUTH_EXTRA_REDUCERS),
    ]),
  },
);
