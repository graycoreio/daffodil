import { EntityState } from '@ngrx/entity';

import { DaffProductGridActionTypes, DaffProductGridActions } from '../../actions/product-grid.actions';
import { DaffProductActionTypes, DaffProductActions } from '../../actions/product.actions';
import { DaffBestSellersActionTypes, DaffBestSellersActions } from '../../actions/best-sellers.actions';
import { DaffProductUnion } from '../../models/product-union';
import { daffProductEntitiesAdapter } from './product-entities-reducer-adapter';

/**
 * Initial state for product entity state.
 */
export const initialState: EntityState<DaffProductUnion> = daffProductEntitiesAdapter.getInitialState();

/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 * 
 * @param state current State of the redux store
 * @param action ProductGrid, BestSellers, or Product actions
 * @returns Product entities state
 */
export function daffProductEntitiesReducer(
  state = initialState, 
  action: DaffProductGridActions | DaffBestSellersActions | DaffProductActions): EntityState<DaffProductUnion> {
  switch (action.type) {
    case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
      return daffProductEntitiesAdapter.upsertMany(action.payload, state);
    case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
      return daffProductEntitiesAdapter.upsertMany(action.payload, state);
    case DaffProductActionTypes.ProductLoadSuccessAction:
      return daffProductEntitiesAdapter.upsertOne(
        { 
          id: action.payload.id, 
          ...action.payload
        },
        state
      );
    case DaffProductActionTypes.ProductModifyAction:
      return daffProductEntitiesAdapter.updateOne(
        {
          id: action.payload.id,
          changes: action.payload.modification
        },
        state
      );
    case DaffProductGridActionTypes.ProductGridResetAction:
      return daffProductEntitiesAdapter.removeAll(state);
    default:
      return state;
  }
}
