import { DaffProduct } from '@daffodil/product';
import {
  DaffProductPageActions,
  DaffProductPageActionTypes,
} from '@daffodil/product/state';

import { DaffRelatedProductsReducerState } from './reducer-state.interface';

/**
 * Initial values of the related product state.
 */
export const initialState: DaffRelatedProductsReducerState = {
  relatedProductIds: [],
};

/**
 * Reducer function that catches actions and changes/overwrites related product state.
 *
 * @param state current State of the redux store
 * @param action a product action
 * @returns product state
 */
export function daffRelatedProductsReducer<T extends DaffProduct>(state = initialState, action: DaffProductPageActions<T>): DaffRelatedProductsReducerState {
  switch (action.type) {
    case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
      const product = action.payload.products.filter(({ id }) => id === action.payload.id)[0];

      return {
        ...state,
        relatedProductIds: product.related?.map(({ id }) => id) || [],
      };
    default:
      return state;
  }
}
