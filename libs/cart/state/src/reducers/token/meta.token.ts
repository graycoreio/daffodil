import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { MetaReducer } from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';

import { DaffCartReducersState } from '../cart-reducers-state.interface';

/**
 * A token to hold the injectable extra meta-reducers.
 *
 * Prefer using {@link daffCartProvideMetaReducers}.
 */
export const DAFF_CART_META_REDUCERS = new InjectionToken<MetaReducer<DaffCartReducersState>[]>(
  'DAFF_CART_META_REDUCERS',
  { factory: () => []},
);

/**
 * Provides additional meta-reducers that run after the standard Daffodil cart meta-reducers.
 *
 * ```ts
 * providers: [
 *   ...daffCartProvideMetaReducers(
 *     myMetaReducer1,
 *     myMetaReducer2
 *   )
 * ]
 * ```
 */
export function daffCartProvideMetaReducers<T extends DaffCart = DaffCart>(
  ...metaReducers: MetaReducer<DaffCartReducersState<T>>[]
): Provider[] {
  return metaReducers.map(metaReducer => ({
    provide: DAFF_CART_META_REDUCERS,
    useValue: metaReducer,
    multi: true,
  }));
}
