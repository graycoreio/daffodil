import { MetaReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';

import { DaffProductReducersState } from '../product-reducers-state.interface';

export const {
  /**
   * A token to hold the injectable extra meta-reducers.
   *
   * Prefer using {@link daffProductProvideMetaReducers}.
   */
  token: DAFF_PRODUCT_META_REDUCERS,

  /**
   * Provides additional meta-reducers that run after the standard Daffodil cart meta-reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffProductProvideMetaReducers(
   *     myMetaReducer1,
   *     myMetaReducer2
   *   )
   * ]
   * ```
   */
  provider: daffProductProvideMetaReducers,
} = createMultiInjectionToken<MetaReducer<DaffProductReducersState>>('DAFF_PRODUCT_META_REDUCERS');
