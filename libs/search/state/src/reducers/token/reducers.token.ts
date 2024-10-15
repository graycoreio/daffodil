import { inject } from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';
import { daffComposeReducers } from '@daffodil/core/state';
// these unused imports are a workaround
import { DaffSearchResult } from '@daffodil/search';

import { DAFF_SEARCH_EXTRA_REDUCERS } from './extra.token';
import { daffSearchReducers } from '../reducers';
import { DaffSearchReducersState } from '../reducers.interface';

export const {
  /**
   * An internal token to hold the Daffodil search reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_SEARCH_REDUCERS,
  provider: provideDaffSearchReducers,
} = createSingleInjectionToken<ActionReducer<DaffSearchReducersState>>(
  'DAFF_SEARCH_REDUCERS',
  {
    providedIn: 'any',
    factory: () => daffComposeReducers([
      combineReducers(daffSearchReducers),
      ...inject(DAFF_SEARCH_EXTRA_REDUCERS),
    ]),
  },
);
