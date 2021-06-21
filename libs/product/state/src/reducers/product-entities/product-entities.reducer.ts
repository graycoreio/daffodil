import { EntityState } from '@ngrx/entity';

import { DaffProduct } from '@daffodil/product';

import {
  DaffProductGridActionTypes,
  DaffProductGridActions,
  DaffProductActionTypes,
  DaffProductActions,
  DaffBestSellersActionTypes,
  DaffBestSellersActions,
  DaffProductPageActions,
  DaffProductPageActionTypes,
} from '../../actions/public_api';
import { daffProductEntitiesAdapter } from './product-entities-reducer-adapter';

/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 *
 * @param state current State of the redux store
 * @param action ProductGrid, BestSellers, or Product actions
 * @returns Product entities state
 */
export function daffProductEntitiesReducer<T extends DaffProduct>(
  state = daffProductEntitiesAdapter<T>().getInitialState(),
  action: DaffProductGridActions<T> | DaffBestSellersActions<T> | DaffProductActions<T> | DaffProductPageActions<T>): EntityState<T> {
  const adapter = daffProductEntitiesAdapter<T>();
  switch (action.type) {
    case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
      return adapter.upsertMany(action.payload, state);
    case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
      return adapter.upsertMany(action.payload, state);
    case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
    case DaffProductActionTypes.ProductLoadSuccessAction:
      return adapter.upsertMany(
        action.payload.products,
        state,
      );
    case DaffProductGridActionTypes.ProductGridResetAction:
      return adapter.removeAll(state);
    default:
      return state;
  }
}
