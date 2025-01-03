import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffOrderReducersState } from '../order-reducers.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link daffOrderProvideExtraReducers}.
   */
  token: DAFF_ORDER_EXTRA_REDUCERS,

  /**
   * Provides additional reducers that run after the standard Daffodil order reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffOrderProvideExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: daffOrderProvideExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffOrderReducersState>>(
  'DAFF_ORDER_EXTRA_REDUCERS',
  { providedIn: 'any' },
);
