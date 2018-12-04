import { 
  ActionReducerMap, 
  createSelector, 
  createFeatureSelector,
  MemoizedSelector 
} from '@ngrx/store';
import { Dictionary } from '@ngrx/entity/src/models';

import { Product } from '../../../../index';

import * as fromProductEntities from './product-entities.reducer';
import * as fromProductGrid from './product-grid.reducer';
import * as fromProduct from './product.reducer';
import * as fromBestSellers from './best-sellers.reducer';

export interface State {
  products : fromProductEntities.State;
  productGrid: fromProductGrid.State;
  product: fromProduct.State;
  bestSellers: fromBestSellers.State;
}

export const reducers : ActionReducerMap<State> = {
  products: fromProductEntities.reducer,
  productGrid: fromProductGrid.reducer,
  product: fromProduct.reducer,
  bestSellers: fromBestSellers.reducer
}

/**
 * Product State
 */
export const selectProductState = createFeatureSelector<State>('product');

/**
 * Product Entities State
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
 * Select Product by Id
 */
export const selectProduct = createSelector(
  selectProductEntitiesState,
  (products, props) => products.entities[props.id]
);

/**
 * Product Grid
 */
export const selectProductGridState = createSelector(
  selectProductState,
  (state: State) => state.productGrid
);

export const selectProductGridLoadingState : MemoizedSelector<object, boolean> = createSelector(
  selectProductGridState,
  fromProductGrid.getProductGridLoading
);

/**
 * Selected Product
 */
export const selectSelectedProductState = createSelector(
  selectProductState,
  (state: State) => state.product
);

export const selectSelectedProductId = createSelector(
  selectSelectedProductState,
  fromProduct.getSelectedProductId
);

export const selectSelectedProductQty = createSelector(
  selectSelectedProductState,
  fromProduct.getProductQty
);

export const selectSelectedProductLoadingState = createSelector(
  selectSelectedProductState,
  fromProduct.getProductLoading
);

export const selectSelectedProduct : MemoizedSelector<object, Product> = createSelector(
  selectProductState,
  selectSelectedProductId,
  (state: State, id: string) => state.products.entities[id]
);

/**
 * Best Seller  State
 */
export const selectBestSellersState = createSelector(
  selectProductState,
  (state: State) => state.bestSellers
);

export const selectBestSellersLoadingState : MemoizedSelector<object, boolean> = createSelector(
  selectBestSellersState,
  fromBestSellers.getBestSellersLoading
);

export const selectBestSellersIdsState : MemoizedSelector<object, string[]> = createSelector(
  selectBestSellersState,
  fromBestSellers.getBestSellersIds
);
