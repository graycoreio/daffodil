import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import { DaffCompositeProductReducersState } from '../composite-product-reducers-state.interface';

/**
 * A token to hold the injectable extra reducers.
 *
 * Prefer using {@link daffProductCompositeProvideExtraReducers}.
 */
export const DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS = new InjectionToken<ActionReducer<DaffCompositeProductReducersState>[]>(
  'DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS',
  { factory: () => []},
);

/**
 * Provides additional reducers that run after the standard Daffodil cart reducers.
 *
 * ```ts
 * providers: [
 *   ...daffProductCompositeProvideExtraReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffProductCompositeProvideExtraReducers(
  ...reducers: ActionReducer<Partial<DaffCompositeProductReducersState>>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
