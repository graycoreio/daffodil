import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import {
  DaffCart,
  DaffCartOrderResult,
} from '@daffodil/cart';

import { DaffStatefulCartItem } from '../../models/public_api';
import { DaffCartReducersState } from '../cart-reducers-state.interface';

/**
 * A token to hold the injectable after reducers.
 *
 * Beforefer using {@link daffCartProvideAfterReducers}.
 */
export const DAFF_CART_AFTER_REDUCERS = new InjectionToken<ActionReducer<DaffCartReducersState>[]>(
  'DAFF_CART_AFTER_REDUCERS',
  { factory: () => []},
);

/**
 * Provides reducers that run after the standard Daffodil cart reducers.
 *
 * ```ts
 * providers: [
 *   ...daffCartProvideAfterReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffCartProvideAfterReducers<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffStatefulCartItem = DaffStatefulCartItem
>(
  ...reducers: ActionReducer<DaffCartReducersState<T, V, U>>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_CART_AFTER_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
