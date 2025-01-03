import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';

import { DaffProductReducersState } from '../product-reducers-state.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link daffProductProvideExtraReducers}.
   */
  token: DAFF_PRODUCT_EXTRA_REDUCERS,

  /**
   * Provides additional reducers that run after the standard Daffodil cart reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffProductProvideExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: daffProductProvideExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffProductReducersState>>('DAFF_PRODUCT_EXTRA_REDUCERS');
