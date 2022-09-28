import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import { DaffPaymentReducersState } from '../reducers.interface';

/**
 * A token to hold the injectable extra reducers.
 *
 * Prefer using {@link daffPaymentProvideExtraReducers}.
 */
export const DAFF_PAYMENT_EXTRA_REDUCERS = new InjectionToken<ActionReducer<DaffPaymentReducersState>[]>(
  'DAFF_PAYMENT_EXTRA_REDUCERS',
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
 *   ...daffPaymentProvideExtraReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffPaymentProvideExtraReducers(
  ...reducers: ActionReducer<DaffPaymentReducersState>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_PAYMENT_EXTRA_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
