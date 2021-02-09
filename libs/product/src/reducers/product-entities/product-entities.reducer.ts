import { EntityState } from '@ngrx/entity';

import {
  DaffBestSellersActionTypes,
  DaffBestSellersActions,
} from '../../actions/best-sellers.actions';
import {
  DaffProductGridActionTypes,
  DaffProductGridActions,
} from '../../actions/product-grid.actions';
import {
  DaffProductPageActions,
  DaffProductPageActionTypes,
} from '../../actions/product-page.actions';
import {
  DaffProductActions,
  DaffProductActionTypes,
} from '../../actions/product.actions';
import { DaffProduct } from '../../models/product';
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
      return adapter.upsertOne(
        {
          id: action.payload.id,
          ...action.payload,
        },
        state,
      );
    case DaffProductGridActionTypes.ProductGridResetAction:
      return adapter.removeAll(state);
    default:
      return state;
  }
}
