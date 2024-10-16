import { inject } from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';
import { daffComposeReducers } from '@daffodil/core/state';
// these unused imports are a workaround

import { DAFF_AUTHORIZE_NET_EXTRA_REDUCERS } from './extra.token';
import { daffAuthorizeNetReducer } from '../authorize-net/authorize-net.reducer';
import { DaffAuthorizeNetReducersState } from '../authorize-net-reducers.interface';

export const {
  /**
   * An internal token to hold the Daffodil authorizenet reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_AUTHORIZE_NET_REDUCERS,
  /**
   * Provider function for {@link DAFF_AUTHORIZE_NET_REDUCERS}.
   */
  provider: provideDaffAuthorizeNetReducers,
} = createSingleInjectionToken<ActionReducer<DaffAuthorizeNetReducersState>>(
  'DAFF_AUTHORIZE_NET_REDUCERS',
  {
    providedIn: 'any',
    factory: () => daffComposeReducers([
      combineReducers({
        authorizeNet: daffAuthorizeNetReducer,
      }),
      ...inject(DAFF_AUTHORIZE_NET_EXTRA_REDUCERS),
    ]),
  },
);
