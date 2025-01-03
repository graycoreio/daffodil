import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffCartReducersState } from '../cart-reducers-state.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link daffCartProvideExtraReducers}.
   */
  token: DAFF_CART_EXTRA_REDUCERS,

  /**
   * Provides additional reducers that run after the standard Daffodil cart reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffCartProvideExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: daffCartProvideExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffCartReducersState>>('DAFF_CART_EXTRA_REDUCERS');
