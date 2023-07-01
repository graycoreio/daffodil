import { ActionReducer } from '@ngrx/store';

import { daffProductCompositeEnsureItems } from '@daffodil/product-composite/state';
import { DaffProductReducersState } from '@daffodil/product/state';
import { DAFF_SEARCH_PRODUCT_RESULT_KIND } from '@daffodil/search-product';
import { DaffSearchProductCompositeResult } from '@daffodil/search-product-composite';
import {
  DaffSearchActionTypes,
  DaffSearchActions,
  DaffSearchIncrementalSuccess,
  DaffSearchLoadSuccess,
} from '@daffodil/search/state';

type Reducer = ActionReducer<DaffProductReducersState<DaffSearchProductCompositeResult>, DaffSearchActions<DaffSearchProductCompositeResult>>;

export function daffSearchProductCompositeEnsureItemsMetaReducer(reducer: Reducer): Reducer {
  return (state, action) => {
    switch (action.type) {
      case DaffSearchActionTypes.SearchLoadSuccessAction:
        return reducer(state, new DaffSearchLoadSuccess({
          ...action.payload,
          collection: {
            ...action.payload.collection,
            [DAFF_SEARCH_PRODUCT_RESULT_KIND]: daffProductCompositeEnsureItems<DaffSearchProductCompositeResult>(state, action.payload.collection[DAFF_SEARCH_PRODUCT_RESULT_KIND] || []),
          },
        }));

      case DaffSearchActionTypes.SearchIncrementalSuccessAction:
        return reducer(state, new DaffSearchIncrementalSuccess({
          ...action.payload,
          [DAFF_SEARCH_PRODUCT_RESULT_KIND]: daffProductCompositeEnsureItems<DaffSearchProductCompositeResult>(state, action.payload[DAFF_SEARCH_PRODUCT_RESULT_KIND] || []),
        }));

      default:
        return reducer(state, action);
    }
  };
}
