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
import { DaffSearchResult } from '@daffodil/search';

import { daffSearchReducers } from '../reducers';
import { DaffSearchReducersState } from '../reducers.interface';
import { DAFF_SEARCH_EXTRA_REDUCERS } from './extra.token';

/**
 * An internal token to hold the Daffodil search reducers.
 * Includes the extra and standard reducers.
 *
 * @docs-private
 */
export const DAFF_SEARCH_REDUCERS = new InjectionToken<ActionReducer<DaffSearchReducersState>>(
  'DAFF_SEARCH_REDUCERS',
  {
    providedIn: 'any',
    factory: () => daffComposeReducers([
      combineReducers(daffSearchReducers),
      ...inject(DAFF_SEARCH_EXTRA_REDUCERS),
    ]),
  },
);
