import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Dictionary } from '@ngrx/entity/src/models';

import { ProductGridActionTypes, ProductGridActions } from '../actions/product-grid.actions';
import { ProductActionTypes, ProductActions } from '../actions/product.actions';
import { BestSellersActionTypes, BestSellersActions } from '../actions/best-sellers.actions';
import { Product } from '../models/product';

/**
 * Interface for product entity state.
 */
export interface State extends EntityState<Product> {}

/**
 * Product Adapter for changing/overwriting entity state.
 */
export const productAdapter : EntityAdapter<Product> = createEntityAdapter<Product>();

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
  action: ProductGridActions | BestSellersActions | ProductActions): State {
  switch (action.type) {
    case ProductGridActionTypes.ProductGridLoadSuccessAction:
      return productAdapter.upsertMany(action.payload, state);
    case BestSellersActionTypes.BestSellersLoadSuccessAction:
      return productAdapter.upsertMany(action.payload, state);
    case ProductActionTypes.ProductLoadSuccessAction:
      return productAdapter.upsertOne(
        { 
          id: action.payload.id, 
          ...action.payload
        },
        state
      );
    case ProductGridActionTypes.ProductGridResetAction:
      return productAdapter.removeAll(state);
    default:
      return state;
  }
}

/**
 * Selectors for product entities.
 */
const { selectIds, selectEntities, selectAll, selectTotal } = productAdapter.getSelectors();

/**
 * Selector for product IDs.
 */
export const selectProductIds = selectIds;

/**
 * Selector for product entities.
 */
export const selectProductEntities : (state: EntityState<Product>) => Dictionary<Product> = selectEntities;

/**
 * Selector for all products.
 */
export const selectAllProducts = selectAll;

/**
 * Selector for total number of products.
 */
export const selectProductTotal = selectTotal;
