import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity/src/models';

import * as fromProductEntities from './product-entities.reducer';
import * as fromProductList from './product-list.reducer';
import * as fromProduct from './product.reducer';

import { Product } from '../model/product';

export interface ProductState {
  products : fromProductEntities.State;
  productList: fromProductList.State;
  product: fromProduct.State;
}

export interface State {
  product: ProductState
}

export const reducers : ActionReducerMap<ProductState> = {
  products: fromProductEntities.reducer,
  productList: fromProductList.reducer,
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

export const selectSelectedProductLoadingState = createSelector(
  selectSelectedProductState,
  fromProduct.getProductLoading
)

export const selectSelectedProduct = createSelector(
  selectProductState,
  selectSelectedProductId,
  (state: ProductState, id: string) => state.products.entities[id]
)
