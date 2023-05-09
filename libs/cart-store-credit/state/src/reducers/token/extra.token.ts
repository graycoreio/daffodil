import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import { DaffCartStoreCreditReducersState } from '../reducers.interface';

/**
 * A token to hold the injectable extra reducers.
 *
 * Prefer using {@link daffCustomerProvideExtraReducers}.
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
 *   ...daffCustomerProvideExtraReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffCustomerProvideExtraReducers(
  ...reducers: ActionReducer<DaffCartStoreCreditReducersState>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
