import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity/src/models';

import * as fromProduct from './product-entities.reducer';
import * as fromProductList from './product-list.reducer';

import { Product } from '../model/product';

export interface ProductState {
  products : fromProduct.State;
  productList: fromProductList.State;
}

export interface State {
  product: ProductState
}

export const reducers : ActionReducerMap<ProductState> = {
  products: fromProduct.reducer,
  productList: fromProductList.reducer
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
} = fromProduct.productAdapter.getSelectors(selectProductEntitiesState);

/**
 * Product List
 */
export const selectProductListState = createSelector(
  selectProductState,
  (state: ProductState) => state.productList
)

export const selectProductListLoadingState : MemoizedSelector<object, boolean> = createSelector(
  selectProductListState,
  fromProductList.getProductListLoading
)
