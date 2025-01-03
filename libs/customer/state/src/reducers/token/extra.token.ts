import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffCustomerReducersState } from '../reducers.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link daffCustomerProvideExtraReducers}.
   */
  token: DAFF_CUSTOMER_EXTRA_REDUCERS,

  /**
   * Provides additional reducers that run after the standard Daffodil customer reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffCustomerProvideExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: daffCustomerProvideExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffCustomerReducersState>>(
  'DAFF_CUSTOMER_EXTRA_REDUCERS',
  { providedIn: 'any' },
);
