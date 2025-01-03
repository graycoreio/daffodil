import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffCustomerPaymentReducersState } from '../reducers.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link daffCustomerPaymentProvideExtraReducers}.
   */
  token: DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS,

  /**
   * Provides additional reducers that run after the standard Daffodil customer reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffCustomerPaymentProvideExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: daffCustomerPaymentProvideExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffCustomerPaymentReducersState>>(
  'DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS',
  { providedIn: 'any' },
);
