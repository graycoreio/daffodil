import { DaffProduct } from '@daffodil/product';
import {
  DaffProductPageActions,
  DaffProductPageActionTypes,
} from '@daffodil/product/state';
import { DaffUpsellProduct } from '@daffodil/upsell-products';

import { DaffUpsellProductsReducerState } from './reducer-state.interface';

/**
 * Initial values of the upsell product state.
 */
export const initialState: DaffUpsellProductsReducerState = {
  upsellProductIds: [],
};

/**
 * Reducer function that catches actions and changes/overwrites upsell product state.
 */
export function daffUpsellProductsReducer<T extends DaffProduct>(state = initialState, action: DaffProductPageActions<T>): DaffUpsellProductsReducerState {
  switch (action.type) {
    case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
      const product = action.payload.products.filter(({ id }) => id === action.payload.id)[0];

      return {
        ...state,
        upsellProductIds: (<DaffUpsellProduct><unknown>product).upsell?.map(({ id }) => id) || [],
      };
    default:
      return state;
  }
}
