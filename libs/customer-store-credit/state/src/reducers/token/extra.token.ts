import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffCustomerStoreCreditReducersState } from '../reducers.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link daffCustomerStoreCreditProvideExtraReducers}.
   */
  token: DAFF_CUSTOMER_STORE_CREDIT_EXTRA_REDUCERS,

  /**
   * Provides additional reducers that run after the standard Daffodil customer reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffCustomerStoreCreditProvideExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: daffCustomerStoreCreditProvideExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffCustomerStoreCreditReducersState>>(
  'DAFF_CUSTOMER_STORE_CREDIT_EXTRA_REDUCERS',
  { providedIn: 'any' },
);
