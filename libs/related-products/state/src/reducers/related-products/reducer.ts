import { DaffProduct } from '@daffodil/product';
import {
  DaffProductPageActions,
  DaffProductPageActionTypes,
} from '@daffodil/product/state';
import { DaffRelatedProduct } from '@daffodil/related-products';

import { DaffRelatedProductsReducerState } from './reducer-state.interface';

/**
 * Initial values of the related product state.
 */
export const initialState: DaffRelatedProductsReducerState = {
  relatedProductIds: [],
};

/**
 * Reducer function that catches actions and changes/overwrites related product state.
 */
export function daffRelatedProductsReducer<T extends DaffProduct>(state = initialState, action: DaffProductPageActions<T>): DaffRelatedProductsReducerState {
  switch (action.type) {
    case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
      const product = action.payload.products.filter(({ id }) => id === action.payload.id)[0];

      return {
        ...state,
        relatedProductIds: (<DaffRelatedProduct><unknown>product).related?.map(({ id }) => id) || [],
      };
    default:
      return state;
  }
}
