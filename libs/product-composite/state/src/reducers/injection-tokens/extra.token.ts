import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffCompositeProductReducersState } from '../composite-product-reducers-state.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link daffProductCompositeProvideExtraReducers}.
   */
  token: DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS,

  /**
   * Provides additional reducers that run after the standard Daffodil cart reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffProductCompositeProvideExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: daffProductCompositeProvideExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffCompositeProductReducersState>>('DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS');
