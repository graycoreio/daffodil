import { MetaReducer } from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';
import { createMultiInjectionToken } from '@daffodil/core';

import { DaffCartReducersState } from '../cart-reducers-state.interface';

export const {
  /**
   * A token to hold the injectable extra meta-reducers.
   *
   * Prefer using {@link daffCartProvideMetaReducers}.
   */
  token: DAFF_CART_META_REDUCERS,

  /**
   * Provides additional meta-reducers that run after the standard Daffodil cart meta-reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffCartProvideMetaReducers(
   *     myMetaReducer1,
   *     myMetaReducer2
   *   )
   * ]
   * ```
   */
  provider: daffCartProvideMetaReducers,
} = createMultiInjectionToken<MetaReducer<DaffCartReducersState>>('DAFF_CART_META_REDUCERS');
