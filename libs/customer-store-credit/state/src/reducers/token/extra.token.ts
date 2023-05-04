import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import { DaffCustomerStoreCreditReducersState } from '../reducers.interface';

/**
 * A token to hold the injectable extra reducers.
 *
 * Prefer using {@link daffCustomerProvideExtraReducers}.
 */
export const DAFF_CUSTOMER_STORE_CREDIT_EXTRA_REDUCERS = new InjectionToken<ActionReducer<DaffCustomerStoreCreditReducersState>[]>(
  'DAFF_CUSTOMER_STORE_CREDIT_EXTRA_REDUCERS',
  {
    factory: () => [],
    providedIn: 'any',
  },
);

/**
 * Provides additional reducers that run after the standard Daffodil customer reducers.
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
  ...reducers: ActionReducer<DaffCustomerStoreCreditReducersState>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_CUSTOMER_STORE_CREDIT_EXTRA_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
