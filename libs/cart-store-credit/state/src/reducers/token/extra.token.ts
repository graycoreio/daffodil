import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import { DaffCartStoreCreditReducersState } from '../reducers.interface';

/**
 * A token to hold the injectable extra reducers.
 *
 * Prefer using {@link daffCartStoreCreditProvideExtraReducers}.
 */
export const DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS = new InjectionToken<ActionReducer<DaffCartStoreCreditReducersState>[]>(
  'DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS',
  {
    factory: () => [],
    providedIn: 'any',
  },
);

/**
 * Provides additional reducers that run after the standard Daffodil cart reducers.
 *
 * ```ts
 * providers: [
 *   ...daffCartStoreCreditProvideExtraReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffCartStoreCreditProvideExtraReducers(
  ...reducers: ActionReducer<DaffCartStoreCreditReducersState>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
