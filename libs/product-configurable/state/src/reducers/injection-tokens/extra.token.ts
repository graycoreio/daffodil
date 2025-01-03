import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffConfigurableProductReducersState } from '../configurable-product-reducers-state.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link daffProductConfigurableProvideExtraReducers}.
   */
  token: DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS,

  /**
   * Provides additional reducers that run after the standard Daffodil cart reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffProductConfigurableProvideExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: daffProductConfigurableProvideExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffConfigurableProductReducersState>>('DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS');
