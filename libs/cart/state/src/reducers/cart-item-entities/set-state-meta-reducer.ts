import { ActionReducer } from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';

import {
  DaffCartItemActionTypes,
  DaffCartItemActions,
} from '../../actions/public_api';
import { daffCartItemsEntityTransform } from '../../helpers/public_api';
import { DaffCartReducersState } from '../cart-reducers-state.interface';

type Reducer<T extends DaffCart = DaffCart> = ActionReducer<DaffCartReducersState<T>, DaffCartItemActions<T>>;

/**
 * A meta reducer for determining and setting the correct `daffState` values on cart items.
 */
export function daffCartSetItemStateMetaReducer<T extends DaffCart = DaffCart>(reducer: Reducer<T>): Reducer<T> {
  return (state, action) => {
    switch (action.type) {
      case DaffCartItemActionTypes.CartItemAddSuccessAction:
      case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
        return reducer(
          state,
          {
            ...action,
            payload: {
              ...action.payload,
              items: daffCartItemsEntityTransform<T['items'][number]>(state.cartItems.entities, action.payload.items),
            },
          },
        );

      default:
        return reducer(state, action);
    }
  };
}
