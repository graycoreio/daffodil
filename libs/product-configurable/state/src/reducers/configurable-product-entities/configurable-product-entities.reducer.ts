import { EntityState } from '@ngrx/entity';

import { DaffProduct } from '@daffodil/product';
import { DaffConfigurableProduct } from '@daffodil/product-configurable';
import {
  DaffBestSellersActions,
  DaffBestSellersActionTypes,
  DaffProductActions,
  DaffProductActionTypes,
  DaffProductGridActions,
  DaffProductGridActionTypes,
  DaffProductPageActions,
  DaffProductPageActionTypes,
} from '@daffodil/product/state';

import {
  DaffConfigurableProductActions,
  DaffConfigurableProductActionTypes,
} from '../../actions/public_api';
import { daffConfigurableProductAppliedAttributesEntitiesAdapter } from './configurable-product-entities-reducer-adapter';
import { DaffConfigurableProductEntity } from './configurable-product-entity';

/**
 * Reducer function that catches actions and changes/overwrites configurable product entities state.
 *
 * @param state current State of the redux store
 * @param action ProductGrid, BestSellers, Product, or Configurable Product actions
 * @returns Product entities state
 */
export function daffConfigurableProductEntitiesReducer<T extends DaffProduct, V extends DaffConfigurableProduct>(
  state = daffConfigurableProductAppliedAttributesEntitiesAdapter().getInitialState(),
  action: DaffProductGridActions<T> | DaffBestSellersActions<T> | DaffProductActions<T> | DaffProductPageActions<T> | DaffConfigurableProductActions<V>): EntityState<DaffConfigurableProductEntity> {
  const adapter = daffConfigurableProductAppliedAttributesEntitiesAdapter();
  switch (action.type) {
    case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
    case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
      return adapter.upsertProducts(state, ...(<V[]><unknown>action.payload));

    case DaffProductActionTypes.ProductLoadSuccessAction:
    case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
      return adapter.upsertProducts(state, ...(<V[]><unknown>action.payload.products));

    case DaffConfigurableProductActionTypes.ConfigurableProductApplyAttributeAction:
      return adapter.applyAttribute(state, action.id, action.attributeId, action.attributeValue);

    case DaffConfigurableProductActionTypes.ConfigurableProductRemoveAttributeAction:
      return adapter.removeAttribute(state, action.id, action.attributeId);

    case DaffConfigurableProductActionTypes.ConfigurableProductToggleAttributeAction:
      return adapter.toggleAttribute(state, action.id, action.attributeId, action.attributeValue);

    default:
      return state;
  }
}
