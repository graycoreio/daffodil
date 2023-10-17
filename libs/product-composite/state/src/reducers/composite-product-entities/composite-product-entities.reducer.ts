import { EntityState } from '@ngrx/entity';

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductPageActions,
  DaffProductPageActionTypes,
  DaffProductGridActionTypes,
  DaffProductGridActions,
  DaffBestSellersActions,
  DaffProductActions,
  DaffBestSellersActionTypes,
  DaffProductActionTypes,
} from '@daffodil/product/state';
import { DaffCompositeProduct } from '@daffodil/product-composite';

import { daffCompositeProductAppliedOptionsEntitiesAdapter } from './composite-product-entities-reducer-adapter';
import { DaffCompositeProductEntity } from './composite-product-entity';
import {
  DaffCompositeProductActions,
  DaffCompositeProductActionTypes,
} from '../../actions/public_api';

/**
 * Reducer function that catches actions and changes/overwrites composite product entities state.
 *
 * @param state current State of the redux store
 * @param action ProductGrid, BestSellers, Product, or Composite Product actions
 * @returns Product entities state
 */
export function daffCompositeProductEntitiesReducer<T extends DaffProduct, V extends DaffCompositeProduct>(
  state = daffCompositeProductAppliedOptionsEntitiesAdapter().getInitialState(),
  action: DaffProductGridActions<T> | DaffBestSellersActions<T> | DaffProductActions<T> | DaffProductPageActions<T> | DaffCompositeProductActions<V>): EntityState<DaffCompositeProductEntity> {
  const adapter = daffCompositeProductAppliedOptionsEntitiesAdapter();
  switch (action.type) {
    case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
    case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
      return adapter.upsertProducts(state, ...(<V[]><unknown>action.payload));

    case DaffProductActionTypes.ProductLoadSuccessAction:
    case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
      return adapter.upsertProducts(state, ...(<V[]><unknown>action.payload.products));

    case DaffCompositeProductActionTypes.CompositeProductApplyOptionAction:
      return adapter.applyOption(state, action.id, action.itemId, action.optionId, action.qty);

    default:
      return state;
  }
}
