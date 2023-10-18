import {
  inject,
  InjectionToken,
} from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';

import { DAFF_AUTH_EXTRA_REDUCERS } from './extra.token';
import { DaffAuthFeatureState } from '../auth-feature-state.interface';
import { daffAuthReducers } from '../auth-reducers';

/**
 * An internal token to hold the Daffodil auth reducers.
 * Includes the extra and standard reducers.
 *
 * @docs-private
 */
export const DAFF_AUTH_REDUCERS = new InjectionToken<ActionReducer<DaffAuthFeatureState>>(
  'DAFF_AUTH_REDUCERS',
  {
    factory: () => daffComposeReducers([
      combineReducers(daffAuthReducers),
      ...inject(DAFF_AUTH_EXTRA_REDUCERS),
    ]),
  },
);
