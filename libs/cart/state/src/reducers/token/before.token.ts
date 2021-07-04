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
 * A token to hold the injectable before reducers.
 *
 * Beforefer using {@link daffCartProvideBeforeReducers}.
 */
export const DAFF_CART_BEFORE_REDUCERS = new InjectionToken<ActionReducer<DaffCartReducersState>[]>(
  'DAFF_CART_BEFORE_REDUCERS',
  { factory: () => []},
);

/**
 * Provides reducers that run before the standard Daffodil cart reducers.
 *
 * ```ts
 * providers: [
 *   ...daffCartProvideBeforeReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffCartProvideBeforeReducers<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffStatefulCartItem = DaffStatefulCartItem
>(
  ...reducers: ActionReducer<DaffCartReducersState<T, V, U>>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_CART_BEFORE_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
