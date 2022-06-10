import { EntityState } from '@ngrx/entity';

import {
  DaffProductTypeEnum,
  DaffProduct,
} from '@daffodil/product';
import {
  daffConfigurableProductAppliedAttributesEntitiesAdapter,
  DaffConfigurableProductEntity,
} from '@daffodil/product-configurable/state';
import { DAFF_SEARCH_PRODUCT_RESULT_KIND } from '@daffodil/search-product';
import { DaffSearchProductConfigurableResult } from '@daffodil/search-product-configurable';
import {
  DaffSearchActions,
  DaffSearchActionTypes,
} from '@daffodil/search/state';

/**
 * Reducer function that catches actions and changes/overwrites configurable product entities state.
 */
export function daffSearchProductConfigurableProductEntitiesReducer<T extends DaffSearchProductConfigurableResult = DaffSearchProductConfigurableResult>(
  state = daffConfigurableProductAppliedAttributesEntitiesAdapter().getInitialState(),
  action: DaffSearchActions<T>,
): EntityState<DaffConfigurableProductEntity> {
  const adapter = daffConfigurableProductAppliedAttributesEntitiesAdapter();
  switch (action.type) {
    case DaffSearchActionTypes.SearchLoadSuccessAction:
      return adapter.upsertProducts(state, ...(<T[]>action.payload.collection[DAFF_SEARCH_PRODUCT_RESULT_KIND] || []));

    default:
      return state;
  }
}
