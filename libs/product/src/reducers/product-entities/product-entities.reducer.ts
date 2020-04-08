import { EntityState } from '@ngrx/entity';

import { DaffProductGridActionTypes, DaffProductGridActions } from '../../actions/product-grid.actions';
import { DaffProductActionTypes, DaffProductActions } from '../../actions/product.actions';
import { DaffBestSellersActionTypes, DaffBestSellersActions } from '../../actions/best-sellers.actions';
import { daffProductEntitiesAdapter } from './product-entities-reducer-adapter';
import { DaffProduct } from '../../models/product';

/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 * 
 * @param state current State of the redux store
 * @param action ProductGrid, BestSellers, or Product actions
 * @returns Product entities state
 */
export function daffProductEntitiesReducer<T extends DaffProduct>(
  state = daffProductEntitiesAdapter<T>().getInitialState(), 
  action: DaffProductGridActions<T> | DaffBestSellersActions<T> | DaffProductActions<T>): EntityState<T> {
	const adapter = daffProductEntitiesAdapter<T>();
  switch (action.type) {
    case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
      return adapter.upsertMany(action.payload, state);
    case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
      return adapter.upsertMany(action.payload, state);
    case DaffProductActionTypes.ProductLoadSuccessAction:
      return adapter.upsertOne(
        { 
          id: action.payload.id, 
          ...action.payload
        },
        state
      );
    case DaffProductGridActionTypes.ProductGridResetAction:
      return adapter.removeAll(state);
    default:
      return state;
  }
}
