import { EntityState } from '@ngrx/entity';

import {
  daffCompositeProductAppliedOptionsEntitiesAdapter,
  DaffCompositeProductEntity,
} from '@daffodil/product-composite/state';
import { DAFF_SEARCH_PRODUCT_RESULT_KIND } from '@daffodil/search-product';
import { DaffSearchProductCompositeResult } from '@daffodil/search-product-composite';
import {
  DaffSearchActions,
  DaffSearchActionTypes,
} from '@daffodil/search/state';

/**
 * Reducer function for updating composite product entities for a completed search.
 */
export function daffSearchProductCompositeEntitiesReducer<T extends DaffSearchProductCompositeResult = DaffSearchProductCompositeResult>(
  state = daffCompositeProductAppliedOptionsEntitiesAdapter().getInitialState(),
  action: DaffSearchActions<T>,
): EntityState<DaffCompositeProductEntity> {
  const adapter = daffCompositeProductAppliedOptionsEntitiesAdapter();
  switch (action.type) {
    case DaffSearchActionTypes.SearchLoadSuccessAction:
      return adapter.upsertProducts(state, ...(<T[]>action.payload.collection[DAFF_SEARCH_PRODUCT_RESULT_KIND] || []));

    default:
      return state;
  }
}
