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

import { DAFF_AUTHORIZE_NET_EXTRA_REDUCERS } from './extra.token';
import { daffAuthorizeNetReducer } from '../authorize-net/authorize-net.reducer';
import { DaffAuthorizeNetReducersState } from '../authorize-net-reducers.interface';

/**
 * An internal token to hold the Daffodil authorizenet reducers.
 * Includes the extra and standard reducers.
 *
 * @docs-private
 */
export const DAFF_AUTHORIZE_NET_REDUCERS = new InjectionToken<ActionReducer<DaffAuthorizeNetReducersState>>(
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
