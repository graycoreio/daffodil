import { ActionReducer } from '@ngrx/store';

import { DaffProductTypeEnum } from '@daffodil/product';
import { DaffCompositeProduct } from '@daffodil/product-composite';
import {
  DaffProductActionTypes,
  DaffProductActions,
  DaffProductLoadSuccess,
  DaffProductPageActionTypes,
  DaffProductPageActions,
  DaffProductPageLoadSuccess,
  DaffProductReducersState,
} from '@daffodil/product/state';

import { daffProductCompositeEnsureItems } from '../helpers/public_api';

type Reducer = ActionReducer<DaffProductReducersState<DaffCompositeProduct>, DaffProductActions<DaffCompositeProduct> | DaffProductPageActions<DaffCompositeProduct>>;

export function daffProductCompositeEnsureItemsMetaReducer(reducer: Reducer): Reducer {
  return (state, action) => {
    switch (action.type) {
      case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
        return reducer(state, new DaffProductPageLoadSuccess({
          ...action.payload,
          products: daffProductCompositeEnsureItems(state, action.payload.products),
        }));

      case DaffProductActionTypes.ProductLoadSuccessAction:
        return reducer(state, new DaffProductLoadSuccess({
          ...action.payload,
          products: daffProductCompositeEnsureItems(state, action.payload.products),
        }));

      default:
        return reducer(state, action);
    }
  };
}
