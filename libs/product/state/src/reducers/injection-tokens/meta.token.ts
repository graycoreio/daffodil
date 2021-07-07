import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { MetaReducer } from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';

import { DaffProductReducersState } from '../product-reducers-state.interface';


/**
 * A token to hold the injectable extra meta-reducers.
 *
 * Prefer using {@link daffProductProvideMetaReducers}.
 */
export const DAFF_PRODUCT_META_REDUCERS = new InjectionToken<MetaReducer<DaffProductReducersState>[]>(
  'DAFF_PRODUCT_META_REDUCERS',
  { factory: () => []},
);

/**
 * Provides additional meta-reducers that run after the standard Daffodil cart meta-reducers.
 *
 * ```ts
 * providers: [
 *   ...daffProductProvideMetaReducers(
 *     myMetaReducer1,
 *     myMetaReducer2
 *   )
 * ]
 * ```
 */
export function daffProductProvideMetaReducers<T extends DaffProduct = DaffProduct>(
  ...metaReducers: MetaReducer<DaffProductReducersState<T>>[]
): Provider[] {
  return metaReducers.map(metaReducer => ({
    provide: DAFF_PRODUCT_META_REDUCERS,
    useValue: metaReducer,
    multi: true,
  }));
}
