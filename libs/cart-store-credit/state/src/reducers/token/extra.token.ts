import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffCartStoreCreditReducersState } from '../reducers.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link daffCartStoreCreditProvideExtraReducers}.
   */
  token: DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS,

  /**
   * Provides additional reducers that run after the standard Daffodil cart reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffCartStoreCreditProvideExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: daffCartStoreCreditProvideExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffCartStoreCreditReducersState>>(
  'DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS',
  { providedIn: 'any' },
);
