import { ActionReducerMap, createSelector, createFeatureSelector,MemoizedSelector } from '@ngrx/store';

import * as fromProductEntities from './product-entities.reducer';
import * as fromProductGrid from './product-grid.reducer';
import * as fromProduct from './product.reducer';
import * as fromBestSellers from './best-sellers.reducer';
import { DaffProductUnion } from '../models/product-union';

/**
 * Interface for product redux store.
 */
export interface State {
  products : fromProductEntities.State;
  productGrid: fromProductGrid.State;
  product: fromProduct.State;
  bestSellers: fromBestSellers.State;
}

/**
 * Returns state values from all product related reducers.
 */
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
/**
 * Selector for product IDs.
 */
export const selectProductIds = createSelector(
  selectProductEntitiesState,
  fromProductEntities.selectProductIds
);
/**
 * Selector for all product entities (see ngrx/entity).
 */
export const selectProductEntities = createSelector(
  selectProductEntitiesState,
  fromProductEntities.selectProductEntities
);
/**
 * Selector for all products on state.
 */
export const selectAllProducts = createSelector(
  selectProductEntitiesState,
  fromProductEntities.selectAllProducts
);
/**
 * Selector for the total number of products.
 */
export const selectProductTotal = createSelector(
  selectProductEntitiesState,
  fromProductEntities.selectProductTotal
);


export const selectProduct = createSelector(
  selectProductEntitiesState,
  (products, props) => products.entities[props.id]
);

/**
 * Selector for a Product by Id.
 */
export const selectProducts = createSelector(
  selectProductEntitiesState,
  (products, props) => props.ids.map(id => products.entities[id])
);

/**
 * Selector for Product Grid state.
 */
export const selectProductGridState = createSelector(
  selectProductState,
  (state: State) => state.productGrid
);
/**
 * Selector for product grid loading state.
 */
export const selectProductGridLoadingState = createSelector(
  selectProductGridState,
  fromProductGrid.getProductGridLoading
);

/**
 * Selector for the selected product.
 */
export const selectSelectedProductState = createSelector(
  selectProductState,
  (state: State) => state.product
);
/**
 * Selector for the selected product's ID.
 */
export const selectSelectedProductId = createSelector(
  selectSelectedProductState,
  fromProduct.getSelectedProductId
);
/**
 * Selector for the quantity of the product.
 */
export const selectSelectedProductQty = createSelector(
  selectSelectedProductState,
  fromProduct.getProductQty
);
/**
 * Selector for the loading state of the selected product.
 */
export const selectSelectedProductLoadingState = createSelector(
  selectSelectedProductState,
  fromProduct.getProductLoading
);
/**
 * Selects the selected product from product state and the selected product ID.
 */
export const selectSelectedProduct = createSelector(
  selectProductState,
  selectSelectedProductId,
  (state: State, id: string) => state.products.entities[id]
);

/**
 * Selector for Best Seller State
 */
export const selectBestSellersState = createSelector(
  selectProductState,
  (state: State) => state.bestSellers
);
/**
 * Selector for the loading state of best selling products.
 */
export const selectBestSellersLoadingState : MemoizedSelector<object, boolean> = createSelector(
  selectBestSellersState,
  fromBestSellers.getBestSellersLoading
);
/**
 * Selector for the IDs of best selling products.
 */
export const selectBestSellersIdsState : MemoizedSelector<object, string[]> = createSelector(
  selectBestSellersState,
  fromBestSellers.getBestSellersIds
);
/**
 * Selector for the best selling products.
 */
export const selectBestSellersProducts: MemoizedSelector<object, DaffProductUnion[]> = createSelector(
  selectBestSellersIdsState,
  selectAllProducts,
  (ids: string[], products: DaffProductUnion[]) => products.filter(product => ids.indexOf(product.id) > -1)
)
