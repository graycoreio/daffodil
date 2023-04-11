import { ActionReducer } from '@ngrx/store';

import { DaffProductTypeEnum } from '@daffodil/product';
import { DaffConfigurableProduct } from '@daffodil/product-configurable';
import {
  DaffProductActionTypes,
  DaffProductActions,
  DaffProductLoadSuccess,
  DaffProductPageActionTypes,
  DaffProductPageActions,
  DaffProductPageLoadSuccess,
  DaffProductReducersState,
} from '@daffodil/product/state';

import { daffProductConfigurableEnsureChildren } from '../helpers/public_api';

type Reducer = ActionReducer<DaffProductReducersState<DaffConfigurableProduct>, DaffProductActions<DaffConfigurableProduct> | DaffProductPageActions<DaffConfigurableProduct>>;

export function daffProductConfigurableEnsureChildrenMetaReducer(reducer: Reducer): Reducer {
  return (state, action) => {
    switch (action.type) {
      case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
        return reducer(state, new DaffProductPageLoadSuccess({
          ...action.payload,
          products: daffProductConfigurableEnsureChildren(state, action.payload.products),
        }));

      case DaffProductActionTypes.ProductLoadSuccessAction:
        return reducer(state, new DaffProductLoadSuccess({
          ...action.payload,
          products: daffProductConfigurableEnsureChildren(state, action.payload.products),
        }));

      default:
        return reducer(state, action);
    }
  };
}
