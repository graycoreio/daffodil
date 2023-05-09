import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import { DaffOrderReducersState } from '../order-reducers.interface';

/**
 * A token to hold the injectable extra reducers.
 *
 * Prefer using {@link daffOrderProvideExtraReducers}.
 */
export const DAFF_ORDER_EXTRA_REDUCERS = new InjectionToken<ActionReducer<DaffOrderReducersState>[]>(
  'DAFF_ORDER_EXTRA_REDUCERS',
  {
    factory: () => [],
    providedIn: 'any',
  },
);

/**
 * Provides additional reducers that run after the standard Daffodil order reducers.
 *
 * ```ts
 * providers: [
 *   ...daffOrderProvideExtraReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffOrderProvideExtraReducers(
  ...reducers: ActionReducer<DaffOrderReducersState>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_ORDER_EXTRA_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
