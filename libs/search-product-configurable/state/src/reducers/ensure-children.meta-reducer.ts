import { ActionReducer } from '@ngrx/store';

import { daffProductConfigurableEnsureChildren } from '@daffodil/product-configurable/state';
import { DaffProductReducersState } from '@daffodil/product/state';
import { DAFF_SEARCH_PRODUCT_RESULT_KIND } from '@daffodil/search-product';
import { DaffSearchProductConfigurableResult } from '@daffodil/search-product-configurable';
import {
  DaffSearchActionTypes,
  DaffSearchActions,
  DaffSearchIncrementalSuccess,
  DaffSearchLoadSuccess,
} from '@daffodil/search/state';

type Reducer = ActionReducer<DaffProductReducersState<DaffSearchProductConfigurableResult>, DaffSearchActions<DaffSearchProductConfigurableResult>>;

export function daffSearchProductConfigurableEnsureChildrenMetaReducer(reducer: Reducer): Reducer {
  return (state, action) => {
    switch (action.type) {
      case DaffSearchActionTypes.SearchLoadSuccessAction:
        return reducer(state, new DaffSearchLoadSuccess({
          ...action.payload,
          collection: {
            ...action.payload.collection,
            [DAFF_SEARCH_PRODUCT_RESULT_KIND]: daffProductConfigurableEnsureChildren<DaffSearchProductConfigurableResult>(state, action.payload.collection[DAFF_SEARCH_PRODUCT_RESULT_KIND] || []),
          },
        }));

      case DaffSearchActionTypes.SearchIncrementalSuccessAction:
        return reducer(state, new DaffSearchIncrementalSuccess({
          ...action.payload,
          [DAFF_SEARCH_PRODUCT_RESULT_KIND]: daffProductConfigurableEnsureChildren<DaffSearchProductConfigurableResult>(state, action.payload[DAFF_SEARCH_PRODUCT_RESULT_KIND] || []),
        }));

      default:
        return reducer(state, action);
    }
  };
}
