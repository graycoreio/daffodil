import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromProductEntities from './product-entities.reducer';
import * as fromProductGrid from './product-grid.reducer';
import * as fromProduct from './product.reducer';

export interface ProductState {
  products : fromProductEntities.State;
  productGrid: fromProductGrid.State;
  product: fromProduct.State;
}

export interface State {
  product: ProductState
}

export const reducers : ActionReducerMap<ProductState> = {
  products: fromProductEntities.reducer,
  productGrid: fromProductGrid.reducer,
  product: fromProduct.reducer
}

/**
 * Product State
 */
export const selectProductState = createFeatureSelector<ProductState>('product');

/**
 * Entities
 */
export const selectProductEntitiesState = createSelector(
  selectProductState,
  (state: ProductState) => state.products
)

/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reduces boilerplate
 * in selecting records from the entity state.
 */
export const {
  selectIds: selectProductIds,
  selectEntities: selectProductEntities,
  selectAll: selectAllProducts,
  selectTotal: selectTotalProducts
} = fromProductEntities.productAdapter.getSelectors(selectProductEntitiesState);

/**
 * Product Grid
 */
export const selectProductGridState = createSelector(
  selectProductState,
  (state: ProductState) => state.productGrid
)

export const selectProductGridLoadingState : MemoizedSelector<object, boolean> = createSelector(
  selectProductGridState,
  fromProductGrid.getProductGridLoading
)

/**
 * Selected Product
 */
export const selectSelectedProductState = createSelector(
  selectProductState,
  (state: ProductState) => state.product
)

export const selectSelectedProductId = createSelector(
  selectSelectedProductState,
  fromProduct.getSelectedProductId
)

export const selectSelectedProductQty = createSelector(
  selectSelectedProductState,
  fromProduct.getProductQty
)

export const selectSelectedProductLoadingState = createSelector(
  selectSelectedProductState,
  fromProduct.getProductLoading
)

export const selectSelectedProduct = createSelector(
  selectProductState,
  selectSelectedProductId,
  (state: ProductState, id: string) => state.products.entities[id]
)
