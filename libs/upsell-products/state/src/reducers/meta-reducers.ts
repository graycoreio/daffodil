import { ActionReducer } from '@ngrx/store';

import {
  DaffProductPageActions,
  DaffProductPageActionTypes,
  DaffProductPageLoadSuccess,
} from '@daffodil/product/state';

/**
 * A meta reducer that dedupes nested upsell products.
 * Invokes the passed reducer with a new DaffProductPageLoadSuccess
 * that contains a payload missing the upsell products.
 */
export function daffUpsellProductsDedupeMetaReducer<T = Record<string, any>>(
  reducer: ActionReducer<T, DaffProductPageActions>,
): ActionReducer<T, DaffProductPageActions> {
  return (state: T, action: DaffProductPageActions) => {
    switch (action.type) {
      case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
        return reducer(
          state,
          new DaffProductPageLoadSuccess({
            ...action.payload,
            products: action.payload.products.map(product => {
              if (product.id === action.payload.id) {
                return {
                  ...product,
                  upsell: undefined,
                };
              }

              return product;
            }),
          }),
        );

      default:
        return reducer(state, action);
    }
  };
}
