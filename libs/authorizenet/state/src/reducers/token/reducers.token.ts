import { ActionReducer } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

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
  /**
   * Factory provider function for {@link DAFF_AUTHORIZE_NET_REDUCERS}.
   */
  factoryProvider: provideDaffAuthorizeNetReducersFactory,
} = createSingleInjectionToken<ActionReducer<DaffAuthorizeNetReducersState>>(
  'DAFF_AUTHORIZE_NET_REDUCERS',
);
