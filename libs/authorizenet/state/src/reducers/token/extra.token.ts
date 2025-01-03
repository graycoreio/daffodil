import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffAuthorizeNetReducersState } from '../authorize-net-reducers.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link daffAuthorizeNetProvideExtraReducers}.
   */
  token: DAFF_AUTHORIZE_NET_EXTRA_REDUCERS,

  /**
   * Provides additional reducers that run after the standard Daffodil authorizenet reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffAuthorizeNetProvideExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: daffAuthorizeNetProvideExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffAuthorizeNetReducersState>>(
  'DAFF_AUTHORIZE_NET_EXTRA_REDUCERS',
  { providedIn: 'any' },
);
