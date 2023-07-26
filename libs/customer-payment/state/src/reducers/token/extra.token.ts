import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import { DaffCustomerPaymentReducersState } from '../reducers.interface';

/**
 * A token to hold the injectable extra reducers.
 *
 * Prefer using {@link daffCustomerPaymentProvideExtraReducers}.
 */
export const DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS = new InjectionToken<ActionReducer<DaffCustomerPaymentReducersState>[]>(
  'DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS',
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
 *   ...daffCustomerPaymentProvideExtraReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffCustomerPaymentProvideExtraReducers(
  ...reducers: ActionReducer<DaffCustomerPaymentReducersState>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
