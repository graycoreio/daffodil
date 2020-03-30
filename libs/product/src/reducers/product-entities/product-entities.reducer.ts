import { EntityState, Dictionary } from '@ngrx/entity';

import { DaffProductGridActionTypes, DaffProductGridActions } from '../../actions/product-grid.actions';
import { DaffProductActionTypes, DaffProductActions } from '../../actions/product.actions';
import { DaffBestSellersActionTypes, DaffBestSellersActions } from '../../actions/best-sellers.actions';
import { DaffProductUnion } from '../../models/product-union';
import { productEntitiesAdapter } from './product-entities-reducer-adapter';

/**
 * Initial state for product entity state.
 */
export const initialState: EntityState<DaffProductUnion> = productEntitiesAdapter.getInitialState();

/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 * 
 * @param state current State of the redux store
 * @param action ProductGrid, BestSellers, or Product actions
 * @returns Product entities state
 */
export function reducer(
  state = initialState, 
  action: DaffProductGridActions | DaffBestSellersActions | DaffProductActions): EntityState<DaffProductUnion> {
  switch (action.type) {
    case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
      return productEntitiesAdapter.upsertMany(action.payload, state);
    case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
      return productEntitiesAdapter.upsertMany(action.payload, state);
    case DaffProductActionTypes.ProductLoadSuccessAction:
      return productEntitiesAdapter.upsertOne(
        { 
          id: action.payload.id, 
          ...action.payload
        },
        state
      );
    case DaffProductActionTypes.ProductModifyAction:
      return productEntitiesAdapter.updateOne(
        {
          id: action.payload.id,
          changes: action.payload.modification
        },
        state
      );
    case DaffProductGridActionTypes.ProductGridResetAction:
      return productEntitiesAdapter.removeAll(state);
    default:
      return state;
  }
}

const { selectIds, selectEntities, selectAll, selectTotal } = productEntitiesAdapter.getSelectors();
/**
 * Selector for product IDs.
 */
export const selectProductIds = selectIds;
/**
 * Selector for product entities.
 */
export const selectProductEntities : (state: EntityState<DaffProductUnion>) => Dictionary<DaffProductUnion> = selectEntities;
/**
 * Selector for all products.
 */
export const selectAllProducts = selectAll;
/**
 * Selector for total number of products.
 */
export const selectProductTotal = selectTotal;
