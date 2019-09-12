import { createEntityAdapter, EntityState, EntityAdapter, Dictionary } from '@ngrx/entity';

import { DaffProductGridActionTypes, DaffProductGridActions } from '../actions/product-grid.actions';
import { DaffProductActionTypes, DaffProductActions } from '../actions/product.actions';
import { DaffBestSellersActionTypes, DaffBestSellersActions } from '../actions/best-sellers.actions';
import { DaffProductUnion } from '../models/product-union';

/**
 * Interface for product entity state.
 */
export interface State extends EntityState<DaffProductUnion> {}

/**
 * Product Adapter for changing/overwriting entity state.
 */
export const productAdapter : EntityAdapter<DaffProductUnion> = createEntityAdapter<DaffProductUnion>();

/**
 * Initial state for product entity state.
 */
export const initialState: State = productAdapter.getInitialState();

/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 * 
 * @param state current State of the redux store
 * @param action ProductGrid, BestSellers, or Product actions
 * @returns Product entities state
 */
export function reducer(
  state = initialState, 
  action: DaffProductGridActions | DaffBestSellersActions | DaffProductActions): State {
  switch (action.type) {
    case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
      return productAdapter.upsertMany(action.payload, state);
    case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
      return productAdapter.upsertMany(action.payload, state);
    case DaffProductActionTypes.ProductLoadSuccessAction:
      return productAdapter.upsertOne(
        { 
          id: action.payload.id, 
          ...action.payload
        },
        state
      );
    case DaffProductActionTypes.ProductModifyAction:
      return productAdapter.updateOne(
        {
          id: action.payload.id,
          changes: action.payload.modification
        },
        state
      );
    case DaffProductGridActionTypes.ProductGridResetAction:
      return productAdapter.removeAll(state);
    default:
      return state;
  }
}

const { selectIds, selectEntities, selectAll, selectTotal } = productAdapter.getSelectors();
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
