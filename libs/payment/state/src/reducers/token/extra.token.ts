import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffPaymentReducersState } from '../reducers.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link daffPaymentProvideExtraReducers}.
   */
  token: DAFF_PAYMENT_EXTRA_REDUCERS,

  /**
   * Provides additional reducers that run after the standard Daffodil cart reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffPaymentProvideExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: daffPaymentProvideExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffPaymentReducersState>>(
  'DAFF_PAYMENT_EXTRA_REDUCERS',
  { providedIn: 'any' },
);
