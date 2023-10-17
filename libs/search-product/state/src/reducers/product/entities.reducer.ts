import { EntityState } from '@ngrx/entity';

import { daffProductEntitiesAdapter } from '@daffodil/product/state';
import {
  DaffSearchActions,
  DaffSearchActionTypes,
} from '@daffodil/search/state';
import {
  DaffSearchProductResult,
  DAFF_SEARCH_PRODUCT_RESULT_KIND,
} from '@daffodil/search-product';

/**
 * Reducer function that catches actions and changes/overwrites search entities state.
 */
export function daffSearchProductEntitiesReducer<T extends DaffSearchProductResult = DaffSearchProductResult>(
  state = daffProductEntitiesAdapter<T>().getInitialState(),
  action: DaffSearchActions<T>,
): EntityState<T> {
  const adapter = daffProductEntitiesAdapter<T>();

  switch (action.type) {
    case DaffSearchActionTypes.SearchLoadSuccessAction:
      return adapter.upsertMany(
        action.payload.collection[DAFF_SEARCH_PRODUCT_RESULT_KIND] || [],
        state,
      );

    case DaffSearchActionTypes.SearchIncrementalSuccessAction:
      return adapter.upsertMany(
        action.payload[DAFF_SEARCH_PRODUCT_RESULT_KIND] || [],
        state,
      );

    default:
      return state;
  }
}
