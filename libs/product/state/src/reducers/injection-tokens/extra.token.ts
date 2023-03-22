import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';

import { DaffProductReducersState } from '../product-reducers-state.interface';

/**
 * A token to hold the injectable extra reducers.
 *
 * Prefer using {@link daffProductProvideExtraReducers}.
 */
export const DAFF_PRODUCT_EXTRA_REDUCERS = new InjectionToken<ActionReducer<DaffProductReducersState>[]>(
  'DAFF_PRODUCT_EXTRA_REDUCERS',
  { factory: () => []},
);

/**
 * Provides additional reducers that run after the standard Daffodil cart reducers.
 *
 * ```ts
 * providers: [
 *   ...daffProductProvideExtraReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffProductProvideExtraReducers<T extends DaffProduct = DaffProduct>(
  ...reducers: ActionReducer<DaffProductReducersState<T>>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_PRODUCT_EXTRA_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
