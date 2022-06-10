import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import { DaffConfigurableProductReducersState } from '../configurable-product-reducers-state.interface';

/**
 * A token to hold the injectable extra reducers.
 *
 * Prefer using {@link daffProductConfigurableProvideExtraReducers}.
 */
export const DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS = new InjectionToken<ActionReducer<DaffConfigurableProductReducersState>[]>(
  'DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS',
  { factory: () => []},
);

/**
 * Provides additional reducers that run after the standard Daffodil cart reducers.
 *
 * ```ts
 * providers: [
 *   ...daffProductConfigurableProvideExtraReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffProductConfigurableProvideExtraReducers(
  ...reducers: ActionReducer<Partial<DaffConfigurableProductReducersState>>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
