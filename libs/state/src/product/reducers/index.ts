import { 
  ActionReducerMap, 
  createSelector, 
  createFeatureSelector,
  MemoizedSelector 
} from '@ngrx/store';

import * as fromProductEntities from './product-entities.reducer';
import * as fromProductGrid from './product-grid.reducer';
import * as fromProduct from './product.reducer';
import { Product } from '@daffodil/core';
import { Dictionary } from '@ngrx/entity/src/models';

export interface State {
  products : fromProductEntities.State;
  productGrid: fromProductGrid.State;
  product: fromProduct.State;
}

export const reducers : ActionReducerMap<State> = {
  products: fromProductEntities.reducer,
  productGrid: fromProductGrid.reducer,
  product: fromProduct.reducer
}

/**
 * Product State
 */
export const selectProductState = createFeatureSelector<State>('product');

/**
 * Entities State
 */
// export const selectProductEntitiesState = createFeatureSelector<fromProductEntities.State>('products');
export const selectProductEntitiesState = createSelector(
  selectProductState,
  (state: State) => state.products
)

/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reduces boilerplate
 * in selecting records from the entity state.
 */

// export const {
//   selectIds: selectProductIds,
//   selectEntities: selectProductEntities,
//   selectAll: selectAllProducts,
//   selectTotal: selectTotalProducts
// } = fromProductEntities.productAdapter.getSelectors(selectProductEntitiesState);

export const selectProductIds = createSelector(
  selectProductEntitiesState,
  fromProductEntities.selectProductIds
);

export const selectProductEntities : MemoizedSelector<object, Dictionary<Product>> = createSelector(
  selectProductEntitiesState,
  fromProductEntities.selectProductEntities
);

export const selectAllProducts = createSelector(
  selectProductEntitiesState,
  fromProductEntities.selectAllProducts
);

export const selectProductTotal = createSelector(
  selectProductEntitiesState,
  fromProductEntities.selectProductTotal
);

/**
 * Product Grid
 */
export const selectProductGridState = createSelector(
  selectProductState,
  (state: State) => state.productGrid
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
  (state: State) => state.product
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

export const selectSelectedProduct : MemoizedSelector<object, Product> = createSelector(
  selectProductState,
  selectSelectedProductId,
  (state: State, id: string) => state.products.entities[id]
)
