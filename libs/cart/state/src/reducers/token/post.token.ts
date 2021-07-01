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
 * An internal token to hold the injectable post reducers.
 *
 * @docs-private
 */
export const DAFF_CART_POST_REDUCERS = new InjectionToken<ActionReducer<DaffCartReducersState>[]>(
  'DAFF_CART_POST_REDUCERS',
  { factory: () => []},
);

/**
 * Provides reducers that run after the standard Daffodil cart reducers.
 *
 * ```ts
 * providers: [
 *   ...daffCartProvidePostReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 */
export function daffCartProvidePostReducers<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffStatefulCartItem = DaffStatefulCartItem
>(
  ...reducers: ActionReducer<DaffCartReducersState<T, V, U>>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_CART_POST_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
